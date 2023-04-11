import React, { FC } from 'react';

import { Gap, Title } from 'UI';
import { OrderDelivery, OrderList, OrderSumma } from 'widgets/Order';

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
