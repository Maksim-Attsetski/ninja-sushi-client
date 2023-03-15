import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, TProductType } from './types';

export type TProducts = { [K in TProductType]: IProduct[] };

interface IState extends TProducts {}

const initialState: IState = {
  sushi: [],
  rolls: [],
  set: [],
  drinks: [],
};

type TSetProducts = { type: TProductType; products: IProduct[] };
// type TSetProduct = { type: TProductType; products: IProduct };

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProductsAC: (state: IState, action: PayloadAction<TSetProducts>) => {
      const { products, type } = action.payload;
      if (state[type]) {
        state[type] = products;
      }
    },
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;
