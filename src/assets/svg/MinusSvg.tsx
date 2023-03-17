import React, { FC, memo } from 'react';

interface IProps {
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const MinusSvg: FC<IProps> = ({
  size = 24,
  fill = 'none',
  stroke = '#00CC2D',
  strokeWidth = 6,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5 24L38.5 24'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default memo(MinusSvg);
