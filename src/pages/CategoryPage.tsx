import React, { FC, memo, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';

import {
  CategoryBar,
  ProductFilter,
  IProduct,
  ProductList,
  productTypes,
  TProductType,
} from 'widgets/Product';

const CategoryPage: FC = (props) => {
  const type = useParams()?.type as TProductType;

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const curProductType = useMemo(
    () => productTypes.find((el) => el.type === type),
    [type]
  );

  return (
    <div className='container'>
      <CategoryBar />

      {curProductType && (
        <>
          <ProductFilter
            setFilteredProducts={setFilteredProducts}
            productType={curProductType}
          />
          <ProductList
            type={curProductType.type}
            filteredProducts={filteredProducts}
          />
        </>
      )}
      {/* {curProductType?.type && <ProductList type={curProductType?.type} />} */}
    </div>
  );
};
export default memo(CategoryPage);
