import React, { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

import s from './Input.module.scss';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  colorType?: 'main' | 'secondary';
}

const Input: FC<IProps> = ({ className, colorType = 'main', ...props }) => {
  return (
    <input
      {...props}
      style={{ backgroundColor: colorType === 'main' ? '#F5F5F7' : '#fff' }}
      className={[s.input, className].join(' ')}
    />
  );
};
export default memo(Input);
