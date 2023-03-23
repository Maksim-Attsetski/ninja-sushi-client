import { IGetArray } from './../../shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, TProductType } from './types';

interface IState {
  products: IProduct[];
  count: number;
  last: boolean;
}

const initialState: IState = {
  products: [],
  count: 0,
  last: true,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProductsAC: (
      state: IState,
      action: PayloadAction<IGetArray<IProduct>>
    ) => {
      const { count, data, last } = action.payload;
      state.products = data;
      state.count = count;
      state.last = last;
    },
    editProductsAC: (state: IState, action: PayloadAction<IProduct>) => {
      state.products = state.products.map((product) =>
        product._id === action.payload._id
          ? { ...product, ...action.payload }
          : product
      );
    },
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;
