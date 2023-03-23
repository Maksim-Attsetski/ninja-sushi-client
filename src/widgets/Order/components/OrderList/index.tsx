import React, { FC, memo, useEffect, useMemo } from 'react';
import { List } from 'UI';
import { IOrder } from 'widgets/Order';
import useOrder from 'widgets/Order/hooks/useOrder';
import { Product, useProduct } from 'widgets/Product';
import { useUsers } from 'widgets/User';
import Order from '../Order';

import s from './OrderList.module.scss';

const OrderList: FC = () => {
  const { orders, onGetOrderList } = useOrder();
  // const {} = useProduct();
  const { user } = useUsers();

  useEffect(() => {
    if (user?._id) {
      onGetOrderList({ filter: `authorId==${user?._id};status==not_paid` });
    }
  }, [user?._id]);

  return (
    <div className='container'>
      <List data={orders} renderItem={(el: IOrder) => <Order order={el} />} />
    </div>
  );
};
export default memo(OrderList);
