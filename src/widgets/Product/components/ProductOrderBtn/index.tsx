import React, { FC } from 'react';

import { assets } from 'assets';
import { Button } from 'UI';

import s from './ProductOrderBtn.module.scss';

interface IProps {
  productId: string;
}

const ProductOrderBtn: FC<IProps> = ({ productId }) => {
  return (
    <div>
      <Button text={<assets.PlusSvg />} auth className={s.button} />
    </div>
  );
};
export default ProductOrderBtn;
