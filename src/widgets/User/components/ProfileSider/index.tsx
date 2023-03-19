import React, { FC, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';
import { Button, Gap, SubTitle } from 'UI';
import { useAuth } from 'widgets/Auth';
import { useUsers } from 'widgets/User';

import s from './ProfileSider.module.scss';

const siderContent = [
  { text: 'Редактирование профиля', to: 'edit' },
  { text: 'История заказов', to: 'history' },
  { text: 'Адрес доставки', to: 'delivery' },
  { text: 'Тема сайта', to: 'theme' },
];

const ProfileSider: FC = () => {
  const navigate = useNavigate();
  const { user } = useUsers();
  const { onLogout } = useAuth();

  const [activeRoute, setActiveRoute] = useState(siderContent[0].to);

  const onClickItem = (to: string) => {
    navigate(routeNames.Profile + '/' + to);
    setActiveRoute(to);
  };

  useEffect(() => {
    onClickItem(activeRoute);
  }, []);

  return (
    <div className={s.container}>
      {siderContent.map((el) => (
        <div
          className={[s.item, activeRoute === el.to && s.active].join(' ')}
          onClick={() => onClickItem(el.to)}
          key={el.to}
        >
          {el.text}
        </div>
      ))}

      <div className={s.infoBlock}>
        <div className={s.infoBlockName}>{user?.name}</div>
        {user?.email && <SubTitle text={user?.email} />}
        {user?.phone && <div>{user?.phone}</div>}
      </div>
      <Gap y={10} />
      <Button text='Выйти' onClick={onLogout} />
    </div>
  );
};
export default memo(ProfileSider);
