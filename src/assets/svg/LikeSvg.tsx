import React, { FC } from 'react';

interface IProps {
  size?: number;
  fill?: string;
  stroke?: string;
}
const style = { transition: 'all linear 0.3s' };
const LikeSvg: FC<IProps> = ({ size = 24, fill = 'none', stroke = '#333' }) => {
  return (
    <svg
      style={style}
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z'
        fill={fill}
        stroke={stroke}
        style={style}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default LikeSvg;