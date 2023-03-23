import React, { FC, memo } from 'react';
import { useOrder } from 'widgets/Order';

const OrderConfirmPage: FC = (props) => {
  const { totalPrice, order } = useOrder();
  return (
    <div>
      <div>fff</div>
    </div>
  );
};
export default memo(OrderConfirmPage);
