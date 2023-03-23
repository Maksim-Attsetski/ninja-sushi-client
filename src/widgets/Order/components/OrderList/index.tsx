import React, { FC, memo, useEffect, useMemo } from 'react';

import { useOrder } from 'widgets/Order';
import { useUsers } from 'widgets/User';
import Order from '../Order';

import s from './OrderList.module.scss';

const OrderList: FC = () => {
  const { order, onGetOrderList } = useOrder();
  const { user } = useUsers();

  useEffect(() => {
    if (user?._id) {
      onGetOrderList({ filter: `authorId==${user?._id};status==not_paid` });
    }
  }, [user?._id]);

  return order ? (
    <div className='container'>
      <Order order={order} />
    </div>
  ) : null;
};
export default memo(OrderList);
