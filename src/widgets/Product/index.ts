export * from './types';
export * from './hooks/useProduct';

import CategoryBar from './components/CategoryBar';
import ProductFilter from './components/ProductFilter';
import Product from './components/Product';
import LikedProducts from './components/LikedProducts';

import ProductList from './components/ProductList';
import productService from './service';
import productReducer, { actions } from './state';

export {
  productService,
  productReducer,
  actions,
  Product,
  ProductList,
  CategoryBar,
  ProductFilter,
  LikedProducts,
};
