import React, { FC } from 'react';
import { Gap, Title } from 'UI';
import { OrderList, OrderSumma } from 'widgets/Order';

const OrderPage: FC = () => {
  return (
    <div className='container'>
      <br />
      <Title text='Ваш заказ' />
      <Gap y={10} />
      <OrderSumma />
      <Gap y={10} />
      <OrderList />
    </div>
  );
};
export default OrderPage;
