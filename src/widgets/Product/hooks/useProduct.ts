import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { IProduct, productService, TProductType } from '..';
import { TProducts } from '../state';

export const useProduct = () => {
  const products = useTypedSelector((state) => state.product);
  const { setProductsAC } = useActions().action;

  const getProducts = async (query: IQuery, type: TProductType) => {
    const data = await productService.getAll(query);

    setProductsAC({ type, products: data });
  };

  const getAllProducts = async (query?: IQuery) => {
    const data = await productService.getAll(query || {});

    const productList = data.reduce((prev, cur) => {
      // @ts-ignore
      const isExist = prev[cur.type];
      return { ...prev, [cur.type]: isExist ? [...isExist, cur] : [cur] };
    }, {}) as TProducts;

    for (const k in productList) {
      const key = k as TProductType;
      setProductsAC({ type: key, products: productList[key] });
    }
  };

  return { ...products, getProducts, getAllProducts };
};
