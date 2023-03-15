import React, { FC, useEffect } from 'react';
import { List } from 'UI';
import { useProduct, Product } from 'widgets/Product';

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
        <hr />
        <br />

        <List
          data={sushi}
          containerClassname='list'
          renderItem={(item) => <Product product={item} />}
        />
      </div>
    </div>
  );
};

export default HomePage;
