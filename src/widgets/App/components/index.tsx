import React, { FC, memo } from 'react';
import './App.scss';
import Navigation from 'navigation';
import { FloatMessage } from 'widgets/Message';

const App: FC = () => {
  return (
    <>
      <FloatMessage />
      <Navigation />;
    </>
  );
};

export default memo(App);
