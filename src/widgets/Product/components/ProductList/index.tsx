import { useTypedSelector } from 'hooks';
import React, { FC, memo, useMemo } from 'react';
import { Gap, List, Title } from 'UI';
import { IProduct, Product, TProductType } from 'widgets/Product';

import s from './ProductList.module.scss';

interface IProps {
  type: TProductType;
  text?: string;
  filteredProducts?: IProduct[] | null;
}

const ProductList: FC<IProps> = ({ type, text, filteredProducts = null }) => {
  const { products } = useTypedSelector((state) => state.product);

  const productList = useMemo(
    () => filteredProducts || products.filter((el) => el.type === type) || [],
    [products, filteredProducts, type]
  );

  return (
    <div>
      {text && (
        <>
          <div>
            <Title text={text} />
          </div>
          <Gap y={7} />
        </>
      )}
      <List
        data={productList}
        renderItem={(item) => <Product product={item} />}
        containerClassname={s.list}
        itemClassname={s.item}
        emptyElement={
          <>
            <div className={s.empty}>
              Товаров для данной категории нет в наличии
            </div>
          </>
        }
      />
      <Gap y={15} />
    </div>
  );
};
export default memo(ProductList);
