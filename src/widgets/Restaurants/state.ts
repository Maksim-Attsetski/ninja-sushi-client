import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IRestaurant } from './types';
import { IGetArray } from 'shared';

interface IState {
  restaurants: IRestaurant[];
  count: number;
  last: boolean;
}

const initialState: IState = {
  restaurants: [],
  count: 0,
  last: true,
};

const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  reducers: {
    setRestaurantsAC: (
      state: IState,
      action: PayloadAction<IGetArray<IRestaurant>>
    ) => {
      const { count, data, last } = action.payload;
      state.restaurants = data;
      state.count = count;
      state.last = last;
    },
  },
});

export const restaurantReducer = restaurantSlice.reducer;
export const restaurantActions = restaurantSlice.actions;
