import React, { FC, useMemo, useState } from 'react';
import { getUserGeo } from 'shared';
import { Gap, Title } from 'UI';
import { OrderDelivery, OrderList, OrderSumma } from 'widgets/Order';
import { AddAddressBtn, AddressList, useUsers } from 'widgets/User';

const OrderPage: FC = () => {
  return (
    <div className='container'>
      <br />
      <Title text='Ваш заказ' />
      <Gap y={10} />
      <Gap y={10} />
      <OrderList />
      <Gap y={15} />
      <OrderDelivery />
      <Gap y={10} />
      <OrderSumma />
    </div>
  );
};
export default OrderPage;
