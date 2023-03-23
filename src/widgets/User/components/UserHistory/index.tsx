import React, { FC, memo, useEffect, useMemo } from 'react';
import { List } from 'UI';
import { IOrder, useOrder } from 'widgets/Order';
import { useUsers } from 'widgets/User';

import s from './UserHistory.module.scss';

const UserHistory: FC = () => {
  const { history, onGetOrderList } = useOrder();
  const { user } = useUsers();

  useEffect(() => {
    onGetOrderList({ filter: `authorId==${user?._id};status==paid` }, true);
  }, [user?._id]);

  return (
    <div>
      <div>UserHistory</div>

      <List
        data={history}
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
