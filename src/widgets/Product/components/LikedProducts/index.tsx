import React, { FC, memo, useEffect } from 'react';
import { List } from 'UI';
import { IIngredient, IProduct } from 'widgets/Product/types';
import { TUserWithGeneric, useUsers } from 'widgets/User';
import Product from '../Product';
import ProductList from '../ProductList';

import s from './LikedProducts.module.scss';

const LikedProducts: FC = () => {
  const { user, getUser } = useUsers();

  const onGetFullUser = async () => {
    await getUser(true);
  };

  const onGetUser = async () => {
    await getUser();
  };

  useEffect(() => {
    onGetFullUser();

    return () => {
      onGetUser();
    };
  }, []);

  return (
    <div>
      <div>LikedProducts</div>

      {user?.favorite_products_ids &&
      typeof user?.favorite_products_ids[0] !== 'string' ? (
        <>
          <List
            data={user?.favorite_products_ids as unknown as IProduct[]}
            renderItem={(el: IProduct) => <Product product={el} key={el._id} />}
            containerClassname={s.list}
            itemClassname={s.item}
            emptyElement={
              <>
                <div className={s.empty}>
                  Товаров для данной категории нет в наличии
                </div>
              </>
            }
          />
        </>
      ) : null}
    </div>
  );
};
export default memo(LikedProducts);
