import React, { FC, useEffect } from 'react';
import { Gap, List, Title } from 'UI';
import {
  useProduct,
  Product,
  ProductList,
  productTypes,
} from 'widgets/Product';

const HomePage: FC = () => {
  const { getAllProducts, sushi } = useProduct();

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
