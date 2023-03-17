import React, { FC, useMemo } from 'react';
import { List } from 'UI';
import { IOrder } from 'widgets/Order';
import { IProduct, Product } from 'widgets/Product';

interface IProps {
  order: IOrder;
}

const Order: FC<IProps> = ({ order }) => {
  // @ts-ignore
  const products: IProduct[] = useMemo(
    () =>
      order.products
        .filter((el) => typeof el.product !== 'string')
        .map((el) => el.product),
    [order.products]
  );

  return (
    <div>
      <List
        data={products}
        renderItem={(el: IProduct) => <Product product={el} />}
      />
    </div>
  );
};
export default Order;
