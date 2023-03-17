import React, { FC, memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';

import s from './style.module.scss';
import { assets } from 'assets';
import { useAuth } from 'widgets/Auth';
import { Button } from 'UI';

interface IProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

const _Header: FC<IProps> = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const onBurgerClick = async () => {};

  const routeLinks = useMemo(
    () => [
      { to: routeNames.Home, text: 'Главная' },
      { to: routeNames.Delivery, text: 'Доставка' },
      { to: routeNames.About, text: 'О нас' },
      { to: routeNames.News, text: 'Новости' },
    ],
    []
  );

  return (
    <motion.div className={s.header}>
      <div className={'container ' + s.headerBody}>
        <div className={s.logoContainer}>
          <img className={s.logo} src={assets.logo} alt='logo' />
        </div>
        <div className={s.sFlex}>
          <div className={[s.links, s.sFlex].join(' ')}>
            {routeLinks.map(({ to, text }) => (
              <NavLink key={to} to={to}>
                {text}
              </NavLink>
            ))}
          </div>
          <div className={s.buttonsContainer}>
            <Button text='🔕' colorType='white' />
            <Button text='❤️' colorType='white' />
            <Button text='👤' colorType='white' />
            <Button text='Корзина' colorType='secondary' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(_Header);
