import React, { FC } from 'react';
import { Gap, Title } from 'UI';
import { OrderList, OrderSumma } from 'widgets/Order';
import { AddAddressBtn } from 'widgets/User';

const OrderPage: FC = () => {
  return (
    <div className='container'>
      <br />
      <Title text='Ваш заказ' />
      <Gap y={10} />
      <Gap y={10} />
      <OrderList />
      <AddAddressBtn />
      <OrderSumma />
    </div>
  );
};
export default OrderPage;
