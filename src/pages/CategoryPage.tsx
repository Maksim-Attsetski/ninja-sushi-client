import React, { FC, memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { List } from 'UI';
import {
  CategoryBar,
  Product,
  ProductList,
  productTypes,
  TProductType,
  useProduct,
} from 'widgets/Product';

const CategoryPage: FC = (props) => {
  const type = useParams()?.type as TProductType;

  const curProductType = useMemo(
    () => productTypes.find((el) => el.type === type),
    [type]
  );

  return (
    <div className='container'>
      <CategoryBar />
      <div>CategoryPage</div>

      {curProductType?.type && <ProductList type={curProductType?.type} />}
    </div>
  );
};
export default memo(CategoryPage);
