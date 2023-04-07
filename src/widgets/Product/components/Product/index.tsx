import React, { FC, memo, useMemo } from 'react';
import { assets } from 'assets';
import { Button } from 'UI';

import { IProduct, IStrengths } from 'widgets/Product';
import { useUsers } from 'widgets/User';

import s from './Product.module.scss';
import ProductOrderBtn from '../ProductOrderBtn';
import { getPhoto } from 'shared';
import { useAuth } from 'widgets/Auth';
import { useNavigate } from 'react-router-dom';
import { routeNames } from 'navigation/types';

interface IProps {
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
  const { user, onLikeProduct, getIds } = useUsers();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const productWeightType = useMemo(
    () => (product.type === 'drinks' ? 'мл' : 'г'),
    [product.type]
  );

  const productIngredients = useMemo(() => {
    return product.consist
      .map((ing, inx) => (inx !== 0 ? ing?.name?.toLowerCase() : ing?.name))
      .join(', ');
  }, [product.consist]);

  const productStrengths = useMemo(
    // @ts-ignore
    () => product.strengths.map((strength) => IStrengths[strength])?.join(' '),
    [product.consist]
  );

  const inLiked = useMemo(
    () => getIds()?.includes(product._id),
    [product._id, user?.favorite_products_ids?.length]
  );

  const productPreview = useMemo(
    () => getPhoto(product.preview),
    [product.preview]
  );

  const onClickLike = async () => {
    if (!isAuth) {
      navigate(routeNames.Auth);
    }
    if (product?._id) {
      await onLikeProduct(product._id);
    }
  };

  return (
    <div className={s.product}>
      <div className={s.productImgBlock}>
        <img className={s.productImg} src={productPreview} alt={product.name} />
        <div className={s.emoji}>{productStrengths}</div>
      </div>
      <div>
        <div className={s.productTitle}>{product.name}</div>
        <div className={s.productWeight}>
          Вес: {product.weight} {productWeightType}
        </div>
        <div className={s.productConsist}>{productIngredients}</div>
        <br />
        <div className={s.infoBlock}>
          <div>
            <span className={s.infoBlockPrice}>{product.price}</span>
            <span className={s.infoBlockCurrency}>byn</span>
          </div>
          <div className={s.infoBlockButtons}>
            <div onClick={onClickLike} className={s.infoBlockLike}>
              <assets.LikeSvg isLiked={inLiked} />
            </div>
            <ProductOrderBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Product);
