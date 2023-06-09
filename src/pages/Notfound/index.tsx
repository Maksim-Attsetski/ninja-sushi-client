import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';

import s from './Notfound.module.scss';

const Notfound: FC = () => {
  const navigate = useNavigate();

  const onGoHome = (): void => {
    navigate(routeNames.Home);
  };

  return (
    <div className={s.page}>
      <h3 className={s.text}>
        <strong>404</strong>, Страница <strong>не найдена</strong>
      </h3>
      <br />
      <button onClick={onGoHome}>Главная</button>
    </div>
  );
};

export default Notfound;
