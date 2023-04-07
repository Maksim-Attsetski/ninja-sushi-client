import React, { FC, useMemo, useState } from 'react';
import { getUserGeo } from 'shared';
import { Gap, Title } from 'UI';
import { OrderList, OrderSumma } from 'widgets/Order';
import { AddAddressBtn, AddressList, useUsers } from 'widgets/User';

const OrderPage: FC = () => {
  const { user } = useUsers();
  const defaultAddress = useMemo(() => {
    const address = user?.location
      ? getUserGeo(user?.location[0])
      : { main: '', sub: '' };

    console.log(address.main + '@' + address.sub);

    return address.main + '@' + address.sub;
  }, [user?.location]);

  const [activeAddress, setActiveAddress] = useState<string>(defaultAddress);

  return (
    <div className='container'>
      <br />
      <Title text='Ваш заказ' />
      <Gap y={10} />
      <Gap y={10} />
      <OrderList />
      <Gap y={15} />
      <Title text='Доставка' />
      <Gap y={10} />
      <AddressList
        activeAddress={activeAddress}
        setActiveAddress={setActiveAddress}
        isChangeable
        isDeletable={false}
      />
      <Gap y={7} />
      <AddAddressBtn />
      <Gap y={10} />
      <OrderSumma />
    </div>
  );
};
export default OrderPage;
