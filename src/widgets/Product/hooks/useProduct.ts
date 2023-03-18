import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { IProduct, productService } from '..';

export const useProduct = () => {
  const products = useTypedSelector((state) => state.product);
  const { action } = useActions();

  const getProducts = async (query: IQuery, isReturn?: boolean) => {
    const data = await productService.getAll(query);

    if (isReturn) {
      return data;
    }
    action.setProductsAC(data);
  };

  const editProduct = async (_id: string, product: IProduct) => {
    const data = await productService.edit(_id, product);

    action.editProductsAC(data);
  };

  return { ...products, getProducts, editProduct };
};
