import React, { FC, memo, useCallback, useMemo } from 'react';
import { TGooglePayRes } from 'widgets/Order';
import { useProduct } from 'widgets/Product';
import useOrder from '../../hooks/useOrder';
import PayButton from '../PayButton';

import s from './OrderSumma.module.scss';

const OrderSumma: FC = () => {
  const { order } = useOrder();
  const { products } = useProduct();

  const summa = useMemo(() => {
    return order
      ? order.products.reduce((prev, cur) => {
          const product = products.find((el) => el._id === cur.product);
          return product ? (prev += cur.count * product?.price) : 0;
        }, 0)
      : 0;
  }, [order?.products]);

  const onClickPay = useCallback(async (res: TGooglePayRes) => {
    console.log(res);
  }, []);

  return (
    <div>
      <div className={s.summa}>
        Сумма заказа:{' '}
        {summa.toLocaleString('ru-RU', {
          currency: 'BYN',
        })}{' '}
        BYN
      </div>

      <br />
      <hr />
      <br />
      <PayButton price={summa + ''} onResponse={onClickPay} />
    </div>
  );
};
export default memo(OrderSumma);
