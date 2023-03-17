import React, { FC, useMemo } from 'react';
import { List } from 'UI';
import { IOrder } from 'widgets/Order';
import { IProduct, Product, useProduct } from 'widgets/Product';

import s from './Order.module.scss';

interface IProps {
  order: IOrder;
}

const Order: FC<IProps> = ({ order }) => {
  const { products } = useProduct();
  // @ts-ignore
  const productList: IProduct[] = useMemo(() => {
    return order.products.map((el) =>
      products.find(({ _id }) => _id === el.product)
    );
  }, [order]);

  return (
    <div>
      <List
        data={productList}
        itemClassname={s.item}
        containerClassname={s.list}
        renderItem={(el: IProduct) => <Product product={el} />}
      />
    </div>
  );
};
export default Order;
