import React, { FC, memo, useEffect, useState } from 'react';
import { IQuery } from 'shared';
import { List, Title } from 'UI';
import {
  IIngredient,
  IProduct,
  IProductTypeArray,
  Product,
  useProduct,
} from 'widgets/Product';

import s from './FilteredProducts.module.scss';

interface IProps {
  productType: IProductTypeArray;
}

const enum sortOptionsText {
  price_desc = 'От дорогих к дешевым',
  price_asc = 'От дешевых к дорогим',
}

interface ISortOptions {
  field: keyof IProduct;
  by: 'asc' | 'desc';
  text: sortOptionsText;
}

const FilteredProducts: FC<IProps> = ({ productType }) => {
  const { getProducts } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState<
    IProduct<IIngredient>[]
  >([]);
  const [sortOptions, setSortOptions] = useState<ISortOptions>({
    field: 'price',
    by: 'desc',
    text: sortOptionsText.price_desc,
  });

  const onGetCurProducts = async () => {
    const query: IQuery = {
      filter: `type==${productType.type}`,
      sort: sortOptions.field + '==' + sortOptions.by,
      dependencies: true,
    };
    const products = await getProducts(query, true);

    products && setFilteredProducts(products);
  };
  useEffect(() => {
    onGetCurProducts();
  }, [productType, sortOptions]);
  return (
    <div>
      <Title text={productType.text} />

      <div>{sortOptions.text}</div>

      <List
        data={filteredProducts}
        renderItem={(el) => <Product product={el} />}
        containerClassname={s.list}
        itemClassname={s.item}
      />
    </div>
  );
};
export default memo(FilteredProducts);
