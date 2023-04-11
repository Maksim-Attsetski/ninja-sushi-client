import React, { FC, memo, useEffect, useMemo, useState } from 'react';

import { Title, Gap } from 'UI';
import { getUserGeo } from 'shared';
import { useOrder } from 'widgets/Order';
import { useUsers, AddressList, AddAddressBtn } from 'widgets/User';
import { useActions } from 'hooks';

import s from './OrderDelivery.module.scss';

type TDelivery = 'Доставка' | 'Самовывоз';
const delivery: TDelivery[] = ['Доставка', 'Самовывоз'];

const OrderDelivery: FC = () => {
  const { user } = useUsers();
  const { order } = useOrder();
  const { action } = useActions();

  const defaultAddress = useMemo(() => {
    const address = user?.location
      ? getUserGeo(user?.location[0])
      : { main: '', sub: '' };

    return address.main + '@' + address.sub;
  }, [user?.location]);

  const [activeAddress, setActiveAddress] = useState<string>(defaultAddress);
  const [deliveryType, setDeliveryType] = useState<TDelivery>(delivery[0]);

  const onChangeDeliveryType = (type: TDelivery) => {
    if (order) {
      const newDelivery = { ...order.delivery, delivery: type === 'Доставка' };
      action.setOrdersAC({ ...order, delivery: newDelivery });
      setDeliveryType(type);
    }
  };

  useEffect(() => {
    if (order && order.delivery.address !== activeAddress) {
      const newDelivery = { ...order.delivery, address: activeAddress };
      action.setOrdersAC({ ...order, delivery: newDelivery });
    }
  }, [order, activeAddress]);

  return (
    order && (
      <div className={s.container}>
        <div className='flex justify-between'>
          <Title text='Доставка' />
          <Gap x={10} />
          <div className={s.deliveryTypes}>
            {delivery.map((type) => (
              <div
                onClick={() => onChangeDeliveryType(type)}
                className={[
                  s.deliveryTypesItem,
                  type === deliveryType ? s.active : '',
                ].join(' ')}
                key={type}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <Gap y={20} />
        <AddressList
          activeAddress={activeAddress}
          setActiveAddress={setActiveAddress}
          isChangeable
          isDeletable={false}
        />
        <Gap y={7} />
        <AddAddressBtn />
      </div>
    )
  );
};

export default memo(OrderDelivery);
