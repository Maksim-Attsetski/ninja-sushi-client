import React, { FC, memo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { screens } from 'pages';
import { routeNames } from './types';
import { Layout } from 'widgets/Layout';
import { useAuth } from 'widgets/Auth';
import { useOrder } from 'widgets/Order';
import {
  EditProfile,
  UserDelivery,
  UserHistory,
  UserTheme,
} from 'widgets/User';

const Navigation: FC = () => {
  const { isAuth, onRefresh } = useAuth();

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<screens.Notfound />} path={routeNames.Notfound} />
        <Route path='/' element={<Layout />}>
          <Route element={<screens.Home />} path={routeNames.Home} />
        </Route>
        {isAuth ? (
          <Route path='/' element={<Layout />}>
            <Route element={<screens.About />} path={routeNames.About} />
            <Route element={<screens.Delivery />} path={routeNames.Delivery} />
            <Route element={<screens.Liked />} path={routeNames.Liked} />
            <Route element={<screens.News />} path={routeNames.News} />
            <Route element={<screens.Order />} path={routeNames.Order} />
            <Route element={<screens.Profile />} path={routeNames.Profile}>
              <Route
                element={<EditProfile />}
                path={routeNames.Profile + '/edit'}
              />
              <Route
                element={<UserHistory />}
                path={routeNames.Profile + '/history'}
              />
              <Route
                element={<UserDelivery />}
                path={routeNames.Profile + '/delivery'}
              />
              <Route
                element={<UserTheme />}
                path={routeNames.Profile + '/theme'}
              />
            </Route>
            <Route
              element={<screens.Category />}
              path={routeNames.Category + '/:type'}
            />
          </Route>
        ) : (
          <>
            <Route element={<screens.Auth />} path={routeNames.Auth} />
          </>
        )}
      </Routes>
    </>
  );
};

export default memo(Navigation);
