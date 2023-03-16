import { useTypedSelector } from 'hooks';
import React, { FC } from 'react';
import { Gap, List, Title } from 'UI';
import { IProduct, Product, TProductType } from 'widgets/Product';

import s from './ProductList.module.scss';

interface IProps {
  type: TProductType;
  text: string;
}

const ProductList: FC<IProps> = ({ type, text }) => {
  const products = useTypedSelector((state) => state.product);

  return products[type].length > 0 ? (
    <div>
      <div>
        <Title text={text} />
      </div>
      <Gap y={7} />
      <List
        data={products[type]}
        containerClassname={s.list}
        itemClassname={s.item}
        renderItem={(item) => <Product product={item} />}
      />
      <Gap y={15} />
    </div>
  ) : null;
};
export default ProductList;
