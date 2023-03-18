import React, { FC, memo } from 'react';
import { useUsers } from 'widgets/User';
import s from './UserDelivery.module.scss';

const UserDelivery: FC = () => {
  const { user } = useUsers();

  return (
    <div>
      <div>UserDelivery</div>
      <div>latitude - {user?.location?.latitude}</div>
      <div>longitude - {user?.location?.longitude}</div>
    </div>
  );
};
export default memo(UserDelivery);
