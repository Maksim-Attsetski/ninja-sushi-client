import React, { FC, FormEvent, memo, useState } from 'react';

import { useInput } from 'hooks';
import { Button, Gap, Input, Title } from 'UI';
import useAuth from '../../hooks/useAuth';

import s from './AuthForm.module.scss';
import { ILogin, ISignup } from 'widgets/User';

const AuthForm: FC = () => {
  const { onLogin, onSignup } = useAuth();

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const name = useInput('', 'Имя и Фамилия');
  const email = useInput('', 'Введите e-mail');
  const password = useInput('', 'Введите пароль');

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginDto: ILogin = {
      email: email.props.value,
      password: password.props.value,
    };

    if (!isLogin) {
      const signupdto: ISignup = {
        ...loginDto,
        name: name.props.value,
      };

      await onSignup(signupdto);
      return;
    }

    await onLogin(loginDto);
  };

  return (
    <div className={s.container}>
      <div className={s.containerForm}>
        <Title className={s.title} text='Авторизация' />
        <form className={s.form} onSubmit={onFormSubmit}>
          <Gap y={20} />
          {!isLogin && (
            <>
              <Input {...name.props} minLength={2} maxLength={40} />
              <Gap y={15} />
            </>
          )}
          <Input {...email.props} type='email' />
          <Gap y={15} />
          <Input
            {...password.props}
            type='password'
            minLength={4}
            maxLength={20}
          />
          <Gap y={25} />
          <div
            className={s.changeLogin}
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
          </div>
          <Button
            text={isLogin ? 'Войти' : 'Продолжить'}
            className='w-full'
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};
export default memo(AuthForm);
