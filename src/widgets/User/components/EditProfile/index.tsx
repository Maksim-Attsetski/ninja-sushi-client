import React, { FC, memo, useMemo, useState } from 'react';

import { useInput } from 'hooks';
import { Button, Gap, Input, Title } from 'UI';
import { TUserWithGeneric, useUsers } from 'widgets/User';

import s from './EditProfile.module.scss';

const EditProfile: FC = () => {
  const { user, editUser } = useUsers();

  const name = useInput(user?.name, 'Ваше имя');
  const email = useInput(user?.email, 'Введите e-mail');
  const password = useInput('', 'Введите новый пароль');

  const [status, setStatus] = useState<'' | 'error' | 'success'>('');

  const onSaveData = async () => {
    try {
      await editUser({
        name: name.props.value,
        email: email.props.value,
      } as TUserWithGeneric);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const signupByPass: boolean = useMemo(
    () => (user ? user?.providers.includes('pass') : false),
    [user?.providers]
  );

  const statusText = useMemo(
    () =>
      status === 'error' ? 'Ошибка' : status === 'success' ? 'Успешно' : '',
    [status]
  );

  return (
    <div>
      <Gap y={20} />
      <Title text='Личнные данные' />

      <Gap y={13} />
      <Input {...name.props} />
      <Gap y={13} />
      <Input {...email.props} type='email' />
      <Gap y={13} />

      {signupByPass && (
        <>
          <Input {...password.props} type='password' />
        </>
      )}
      <Gap y={13} />
      {status.length > 0 && <div>{statusText}</div>}
      <Gap y={13} />
      <div className={s.btnContainer}>
        <Button text='Сохранить' className={s.btn} onClick={onSaveData} />
      </div>
    </div>
  );
};
export default memo(EditProfile);
