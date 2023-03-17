import React, { FC, memo, useEffect } from 'react';
import { List } from 'UI';
import { IOrder } from 'widgets/Order';
import useOrder from 'widgets/Order/hooks/useOrder';
import { Product } from 'widgets/Product';
import Order from '../Order';

import s from './OrderList.module.scss';

const OrderList: FC = () => {
  const { orders, onGetOrderList } = useOrder();

  useEffect(() => {
    onGetOrderList({ dependencies: true });
  }, []);

  return (
    <div className='container'>
      <List data={orders} renderItem={(el: IOrder) => <Order order={el} />} />
    </div>
  );
};
export default memo(OrderList);
