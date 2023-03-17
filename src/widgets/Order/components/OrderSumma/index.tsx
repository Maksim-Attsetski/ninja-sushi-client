import React, { FC, memo, useMemo } from 'react';
import { useProduct } from 'widgets/Product';
import useOrder from '../../hooks/useOrder';

import s from './OrderSumma.module.scss';

const OrderSumma: FC = () => {
  const { orders } = useOrder();
  const { products } = useProduct();

  const curOrder = useMemo(
    () => orders.find((el) => el.status === 'not paid'),
    [orders]
  );

  const summa = useMemo(() => {
    return curOrder
      ? curOrder.products.reduce((prev, cur) => {
          const product = products.find((el) => el._id === cur.product);
          return product ? (prev += cur.count * product?.price) : 0;
        }, 0)
      : 0;
  }, [curOrder]);

  return (
    <div>
      <div className={s.summa}>
        Сумма заказа:{' '}
        {summa.toLocaleString('ru-RU', {
          currency: 'BYN',
        })}{' '}
        BYN
      </div>
    </div>
  );
};
export default memo(OrderSumma);
