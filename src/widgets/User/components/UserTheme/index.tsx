import React, { FC, memo, useState } from 'react';
import { Button } from 'UI';

import s from './UserTheme.module.scss';

const UserTheme: FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const onChangeTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <div>UserTheme</div>
      <div>theme - {theme}</div>
      <Button
        text='Сменить тему'
        colorType={theme === 'light' ? 'secondary' : undefined}
        small
        onClick={onChangeTheme}
      />
    </div>
  );
};
export default memo(UserTheme);
