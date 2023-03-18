import { usePagination } from 'hooks';
import React, { FC, memo, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';
import { BtnMoreContent } from 'shared';
import { Button, Gap } from 'UI';

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
  const { limit, page, plusLimit } = usePagination(2);

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
            limit={limit}
            page={page}
            setFilteredProducts={setFilteredProducts}
            productType={curProductType}
          />
          <ProductList
            type={curProductType.type}
            filteredProducts={filteredProducts}
          />
          <Gap y={10} />
          <BtnMoreContent plusLimit={plusLimit} />
        </>
      )}
      {/* {curProductType?.type && <ProductList type={curProductType?.type} />} */}
    </div>
  );
};
export default memo(CategoryPage);
