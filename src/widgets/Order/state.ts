import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, TOrder } from './types';

interface IState {
  orders: IOrder[];
  history: IOrder[];
  totalPrice: string;
}

const initialState: IState = {
  orders: [],
  history: [],
  totalPrice: '0',
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
    setHistoryAC: (state: IState, action: PayloadAction<IOrder[]>) => {
      state.history = action.payload;
    },
    addHistoryAC: (state: IState, action: PayloadAction<IOrder>) => {
      state.history = [...state.history, action.payload];
    },
    editHistoryAC: (state: IState, action: PayloadAction<IOrder>) => {
      state.history = state.history.map((order: IOrder) =>
        order?._id === action.payload._id
          ? { ...order, ...action.payload }
          : order
      );
    },
    deleteHistoryAC: (state: IState, action: PayloadAction<string>) => {
      state.history = state.history.filter((el) => el._id !== action.payload);
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
