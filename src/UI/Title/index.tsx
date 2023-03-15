import React, { FC, memo } from 'react';

import s from './Title.module.scss';

interface IProps {
  text: string;
  className?: string;
}

const Title: FC<IProps> = ({ text, className = '' }) => {
  return <div className={[s.title, className].join(' ')}>{text}</div>;
};

export default memo(Title);
