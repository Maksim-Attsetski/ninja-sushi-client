import React, { FC, memo } from 'react';
import { Button } from 'UI';

import s from './BtnMoreContent.module.scss';

interface IProps {
  plusLimit: () => void;
  isLast?: boolean;
}

const BtnMoreContent: FC<IProps> = ({ plusLimit, isLast = false }) => {
  return (
    <div className={s.container}>
      <Button
        text='Показать больше'
        className={[s.btn, isLast && s.disable].join(' ')}
        onClick={plusLimit}
      />
    </div>
  );
};
export default memo(BtnMoreContent);
