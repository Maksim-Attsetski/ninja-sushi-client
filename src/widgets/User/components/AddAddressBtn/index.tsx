import React, { FC, memo, useState } from 'react';
import { ILocation, IUser, useUsers } from 'widgets/User';
import { Button, Gap, Input, Modal, TButtonColors, Title } from 'UI';
import { useInput } from 'hooks';

import s from './AddAddressBtn.module.scss';
import AddressList from '../AddressList';

const defaultNumProps = { type: 'number', maxLength: 4, required: true };
const defaultProps = { maxLength: 35, required: true };
const homeProps = { maxLength: 4, required: true };

interface IProps {
  colorTypeError?: TButtonColors;
  colorType?: TButtonColors;
  small?: boolean;
}

const AddAddressBtn: FC<IProps> = ({
  colorType = 'outline-main',
  colorTypeError = 'outline-error',
  small = false,
}) => {
  const { editUser, user } = useUsers();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const city = useInput('', 'Город', null, defaultProps);
  const country = useInput('', 'Страна', null, defaultProps);
  const entrance = useInput('', 'Подъезд', null, defaultNumProps);
  const flat = useInput('', 'Квартира', null, defaultNumProps);
  const floor = useInput('', 'Этаж', null, defaultNumProps);
  const home = useInput('', 'Дом', null, homeProps);
  const street = useInput('', 'Улица', null, defaultProps);

  const onConfirmAddress = async () => {
    const newLocation = {
      city: city.props.value,
      country: country.props.value,
      entrance: +entrance.props.value,
      flat: +flat.props.value,
      floor: +floor.props.value,
      home: home.props.value,
      street: street.props.value,
    } as ILocation;

    await editUser({
      location: [...(user?.location || []), newLocation],
    } as IUser);
    setIsVisible(false);
  };

  const onCloseModal = () => {
    [city, country, entrance, flat, floor, home, street].forEach((el) => {
      el.onClear();
    });
  };

  return (
    <div>
      <Modal
        onModalClose={onCloseModal}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <div>
          <Title text='Ваши адреса' />
          <Gap y={7} />
          <AddressList />
          <Gap y={7} />
          <div className={s.container}>
            <Input {...city.props} />
            <Input {...country.props} />
          </div>
          <Gap y={15} />
          <Input {...street.props} />
          <Gap y={15} />
          <div className={s.container}>
            <Input {...home.props} />
            <Input {...entrance.props} />
            <Input {...floor.props} />
            <Input {...flat.props} />
          </div>
          <Gap y={15} />
          <Button text='Подтвердить' onClick={onConfirmAddress} />
        </div>
      </Modal>
      {user?.location && user?.location.length >= 3 ? (
        <Button
          small={small}
          text='Максимум адресов'
          colorType={colorTypeError}
          className={s.button}
        />
      ) : (
        <Button
          small={small}
          text='Добавить адрес'
          colorType={colorType}
          className={s.button}
          onClick={() => setIsVisible(true)}
        />
      )}
    </div>
  );
};

export default memo(AddAddressBtn);
