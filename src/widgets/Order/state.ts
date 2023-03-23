import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetArray } from 'shared';
import { IOrder, TOrder } from './types';

interface IState {
  order: TOrder;
  history: IOrder[];
  totalPrice: string;
  last: boolean;
  count: number;
}

const initialState: IState = {
  order: null,
  history: [],
  totalPrice: '0',
  last: true,
  count: 0,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setOrdersAC: (state: IState, action: PayloadAction<TOrder>) => {
      state.order = action.payload;
    },
    setHistoryAC: (state: IState, action: PayloadAction<IGetArray<IOrder>>) => {
      const { count, data, last } = action.payload;
      state.history = data;
      state.count = count;
      state.last = last;
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
