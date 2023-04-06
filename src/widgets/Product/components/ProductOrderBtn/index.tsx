import React, { FC, useEffect, useMemo, useState } from 'react';

import { assets } from 'assets';
import { Button } from 'UI';

import s from './ProductOrderBtn.module.scss';
import { IOrder, useOrder } from 'widgets/Order';
import { IProduct, useProduct } from 'widgets/Product';
import { useMessage } from 'widgets/Message';

interface IProps {
  product: IProduct;
}

const ProductOrderBtn: FC<IProps> = ({ product }) => {
  const { order, onEditOrder } = useOrder();
  const [count, setCount] = useState(0);
  const { onSuccessMsg } = useMessage();

  const onEditProductFromOrder = async (to: number) => {
    if (order) {
      const isExist = order.products.find((el) => el.product === product._id);

      const newProductList = order.products.map((el) =>
        el.product === product._id ? { ...el, count: el.count + to } : el
      );

      if (!isExist) {
        newProductList.push({ product: product._id, count: 1 });
      }

      const products = newProductList.filter((el) => el.count > 0);
      await onEditOrder(order._id, { products } as IOrder);

      to > 0 && onSuccessMsg('Товар добавлен в корзину');
    }
  };

  const addButton = useMemo(
    () => (
      <Button
        small
        text={<assets.PlusSvg stroke='#fff' />}
        auth
        className={s.button}
        onClick={() => onEditProductFromOrder(1)}
      />
    ),
    [onEditProductFromOrder]
  );

  useEffect(() => {
    const curProduct = order?.products.find(
      (el) => el.product === product?._id
    );
    setCount(curProduct ? curProduct.count : 0);
  }, [order, product]);

  return (
    <div className={s.container}>
      {count > 0 ? (
        <>
          <Button
            small
            text={<assets.MinusSvg stroke='#fff' />}
            auth
            className={s.button}
            onClick={() => onEditProductFromOrder(-1)}
          />
          {/* <Button small text={count} colorType='white' className={s.button} /> */}
          <div className={s.count}>{count}</div>
          {addButton}
        </>
      ) : (
        addButton
      )}
    </div>
  );
};
export default ProductOrderBtn;
