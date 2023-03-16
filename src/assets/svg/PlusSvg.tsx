import React, { FC, memo } from 'react';

interface IProps {
  size?: number;
  color?: string;
}
const PlusSvg: FC<IProps> = ({ size = 24, color = '#00CC2D' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.0605 10L24.0239 38'
        stroke={color}
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 24L38 24'
        stroke={color}
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default memo(PlusSvg);
