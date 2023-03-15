export * from './types';
export * from './hooks/useProduct';

import Product from './components/Product';
import ProductList from './components/ProductList';
import productService from './service';
import productReducer, { actions } from './state';

export { productService, productReducer, actions, Product, ProductList };
