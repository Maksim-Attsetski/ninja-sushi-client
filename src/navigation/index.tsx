import React, { FC, memo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { screens } from 'pages';
import { routeNames } from './types';
import { Layout } from 'widgets/Layout';
import { useAuth } from 'widgets/Auth';

const Navigation: FC = () => {
  const { isAuth, onRefresh } = useAuth();

  const getAll = async (): Promise<void> => {
    Promise.all([onRefresh()]);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<screens.Home />} path={routeNames.Home} />
        {isAuth ? (
          <Route path='/' element={<Layout />}>
            <Route element={<screens.Notfound />} path={routeNames.Notfound} />
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
