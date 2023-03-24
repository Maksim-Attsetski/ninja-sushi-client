import React, { FC } from 'react';

import { useAuth } from 'widgets/Auth';
import { CategoryBar, ProductList, productTypes } from 'widgets/Product';

const HomePage: FC = () => {
  const { isAuth } = useAuth();
  return (
    <div className='container'>
      <div>
        {isAuth && <CategoryBar />}
        <br />
        {productTypes.map((el) => (
          <ProductList key={el.type} {...el} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
