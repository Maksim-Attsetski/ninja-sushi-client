import React, { FC, memo, useMemo } from 'react';

import { Gap, Title } from 'UI';
import { AddAddressBtn, AddressList } from 'widgets/User';

import s from './UserDelivery.module.scss';

const UserDelivery: FC = () => {
  return (
    <div className='w-full'>
      <Gap y={15} />
      <div className='flex justify-between'>
        <Title text='Адреса доставки' />
        <AddAddressBtn small colorType='main' />
      </div>
      <Gap y={10} />
      <AddressList />
    </div>
  );
};
export default memo(UserDelivery);
