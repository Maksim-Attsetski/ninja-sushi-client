import { assets } from 'assets';
import React, { FC, useMemo } from 'react';

import { IProduct, IStrengths } from 'widgets/Product';

import s from './Product.module.scss';

interface IProps {
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
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

  return (
    <div className={s.product}>
      <div className={s.productImgBlock}>
        <img
          className={s.productImg}
          src={product?.preview || assets.sushiDefault}
          alt=''
        />
        <div className={s.emoji}>{productStrengths}</div>
      </div>
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
          <button className={s.infoBlockLike}>❤️</button>
          <button className={s.infoBlockAdd}>➕</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
