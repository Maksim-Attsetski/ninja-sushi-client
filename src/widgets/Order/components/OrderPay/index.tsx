import React, { FC, memo, useMemo } from 'react';
import s from './OrderPay.module.scss';
import { useActions } from 'hooks';
import { IOrder, TPaymentsType, useOrder } from 'widgets/Order';
import { Gap, IOptions, Select, Title } from 'UI';

const methods: TPaymentsType[] = [
  'cash',
  'cash courier',
  'card',
  'card courier',
];

const OrderPay: FC = () => {
  const { action } = useActions();
  const { order } = useOrder();

  const payOptions: IOptions[] = useMemo(
    () => [
      { text: 'Наличными', value: methods[0] },
      { text: 'Наличными курьеру', value: methods[1] },
      { text: 'Картой', value: methods[2] },
      { text: 'Картой курьеру', value: methods[3] },
    ],
    [order?.paymentsType]
  );

  const onChangePaymentsMethod = (method: string) => {
    action.setOrdersAC({ paymentsType: method } as IOrder);
  };

  return (
    <div className='bg-white px-4 py-5 rounded-xl'>
      <Title text='Способ оплаты' />
      <Gap y={20} />
      <Select
        value={
          payOptions.find((el) => el.value === order?.paymentsType)?.text || ''
        }
        setValue={onChangePaymentsMethod}
        options={payOptions}
      />
    </div>
  );
};

export default memo(OrderPay);
