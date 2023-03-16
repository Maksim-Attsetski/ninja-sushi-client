import React, { FC, useEffect } from 'react';

import { useProduct, ProductList, productTypes } from 'widgets/Product';

const HomePage: FC = () => {
  const { getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts({ dependencies: true });
  }, []);

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
