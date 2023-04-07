import React, { FC, memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';
import s from './style.module.scss';

import { assets } from 'assets';
import { useAuth } from 'widgets/Auth';
import { Button } from 'UI';
import { useOrder } from 'widgets/Order';

interface IProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

const _Header: FC<IProps> = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { order } = useOrder();

  const onOpen = (to: routeNames) => {
    navigate(to);
  };

  const routeLinks = useMemo(
    () => [
      { to: routeNames.Home, text: 'Главная' },
      { to: routeNames.Delivery, text: 'Доставка' },
      { to: routeNames.About, text: 'О нас' },
      { to: routeNames.News, text: 'Новости' },
    ],
    []
  );

  const orderCount = useMemo(
    () =>
      order
        ? order?.products.reduce((last, current) => (last += current.count), 0)
        : 0,
    [order]
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
            <Button
              onClick={() => onOpen(routeNames.About)}
              text='🔕'
              auth
              small
              colorType='white'
            />
            <Button
              onClick={() => onOpen(routeNames.Liked)}
              text='❤️'
              auth
              small
              colorType='white'
            />
            <Button
              onClick={() => onOpen(routeNames.Profile)}
              text='👤'
              auth
              small
              colorType='white'
            />
            <Button
              onClick={() => onOpen(routeNames.Order)}
              text={'Корзина ' + orderCount}
              auth
              small
              colorType='secondary'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(_Header);
