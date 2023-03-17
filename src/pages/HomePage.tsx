import React, { FC } from 'react';

import { ProductList, productTypes } from 'widgets/Product';

const HomePage: FC = () => {
  return (
    <div className='container'>
      <div>
        <div>home</div>
        <br />
        {productTypes.map((el) => (
          <ProductList key={el.type} {...el} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
