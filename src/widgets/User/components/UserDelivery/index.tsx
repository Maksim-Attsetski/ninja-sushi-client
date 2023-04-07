import React, { FC, memo, useMemo } from 'react';
import s from './UserDelivery.module.scss';
import AddressList from '../AddressList';
import { Gap } from 'UI';

const UserDelivery: FC = () => {
  return (
    <div>
      <div>UserDelivery</div>
      <Gap y={10} />
      <AddressList />
    </div>
  );
};
export default memo(UserDelivery);
