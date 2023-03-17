import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, TOrder } from './types';

interface IState {
  orders: IOrder[];
}

const initialState: IState = {
  orders: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setOrdersAC: (state: IState, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },
    addOrderAC: (state: IState, action: PayloadAction<IOrder>) => {
      state.orders = [...state.orders, action.payload];
    },
    editOrderAC: (state: IState, action: PayloadAction<IOrder>) => {
      state.orders = state.orders.map((order: IOrder) =>
        order?._id === action.payload._id
          ? { ...order, ...action.payload }
          : order
      );
    },
    deleteOrderAC: (state: IState, action: PayloadAction<string>) => {
      state.orders = state.orders.filter((el) => el._id !== action.payload);
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
