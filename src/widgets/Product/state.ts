import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, TProductType } from './types';

interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProductsAC: (state: IState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;
