import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { IProduct, productService, TProductType } from '..';

export const useProduct = () => {
  const products = useTypedSelector((state) => state.product);
  const { setProductsAC } = useActions().action;

  const getProducts = async (query: IQuery) => {
    const data = await productService.getAll(query);

    setProductsAC(data);
  };

  return { ...products, getProducts };
};
