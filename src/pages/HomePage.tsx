import React, { FC } from 'react';

import { CategoryBar, ProductList, productTypes } from 'widgets/Product';

const HomePage: FC = () => {
  return (
    <div className='container'>
      <div>
        <CategoryBar />
        <br />
        {productTypes.map((el) => (
          <ProductList key={el.type} {...el} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
