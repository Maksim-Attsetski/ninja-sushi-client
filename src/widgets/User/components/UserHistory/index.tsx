import React, { FC, memo, useMemo } from 'react';
import { List } from 'UI';
import { IOrder, useOrder } from 'widgets/Order';

import s from './UserHistory.module.scss';

const UserHistory: FC = () => {
  const { orders } = useOrder();

  const curOrders = useMemo(
    () => orders.filter((el) => el.status === 'paid'),
    [orders]
  );

  return (
    <div>
      <div>UserHistory</div>

      <List
        data={curOrders}
        renderItem={(el: IOrder) => <div>{el.price}</div>}
        emptyElement={
          <>
            <div>Вы ещё не совершали покупок</div>
          </>
        }
      />
    </div>
  );
};
export default memo(UserHistory);
