import React, { FC, memo } from 'react';

interface IProps {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}
const PlusSvg: FC<IProps> = ({
  size = 24,
  stroke = '#00CC2D',
  strokeWidth = 6,
}) => {
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
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 24L38 24'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default memo(PlusSvg);
