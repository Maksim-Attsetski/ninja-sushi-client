import React, { FC, memo, useEffect, useMemo } from 'react';
import { List } from 'UI';
import { IOrder } from 'widgets/Order';
import useOrder from 'widgets/Order/hooks/useOrder';
import { Product, useProduct } from 'widgets/Product';
import Order from '../Order';

import s from './OrderList.module.scss';

const OrderList: FC = () => {
  const { orders, onGetOrderList } = useOrder();
  const {} = useProduct();

  useEffect(() => {
    onGetOrderList();
  }, []);

  return (
    <div className='container'>
      <List data={orders} renderItem={(el: IOrder) => <Order order={el} />} />
    </div>
  );
};
export default memo(OrderList);
