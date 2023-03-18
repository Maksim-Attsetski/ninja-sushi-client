import React, { FC, memo } from 'react';
import { Button } from 'UI';

import s from './BtnMoreContent.module.scss';

interface IProps {
  plusLimit: () => void;
}

const BtnMoreContent: FC<IProps> = ({ plusLimit }) => {
  return (
    <div className={s.container}>
      <Button text='Показать больше' className={s.btn} onClick={plusLimit} />
    </div>
  );
};
export default memo(BtnMoreContent);
