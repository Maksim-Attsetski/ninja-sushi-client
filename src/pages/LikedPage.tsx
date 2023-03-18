import React, { FC } from 'react';
import { Title } from 'UI';
import { LikedProducts } from 'widgets/Product';

const LikedPage: FC = () => {
  return (
    <div className='container'>
      <Title text='Избранные продукты' />
      <LikedProducts />
    </div>
  );
};
export default LikedPage;
