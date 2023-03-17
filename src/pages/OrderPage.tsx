import React, { FC } from 'react';
import { Gap, Title } from 'UI';
import { OrderList } from 'widgets/Order';

const OrderPage: FC = () => {
  return (
    <div className='container'>
      <br />
      <Title text='Ваш заказ' />
      <Gap y={10} />
      <OrderList />
    </div>
  );
};
export default OrderPage;
