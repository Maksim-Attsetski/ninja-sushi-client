import React, { FC } from 'react';

import { IProduct } from 'widgets/Product';

import s from './Product.module.scss';

interface IProps {
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
  return (
    <div>
      <div>
        <img src='' alt='' />
        <div className={s.emoji}>🤣❤️😍</div>
      </div>
      <h3>{product.name}</h3>
      <div>{product.weight}</div>
      <div>
        {product.consist.map((ingredient) => (
          <div key={ingredient?._id}>{ingredient?.name}</div>
        ))}
      </div>
      <br />
      <div className={s.infoBlock}>
        <div>{product.price}</div>
        <div>
          <button>❤️</button>
          <button>&time;</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
