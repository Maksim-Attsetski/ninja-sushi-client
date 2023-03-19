import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INews } from './types';

interface IState {
  news: INews[];
}

const initialState: IState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setNewsAC: (state: IState, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    addNewsAC: (state: IState, action: PayloadAction<INews>) => {
      state.news = [action.payload, ...state.news];
    },
    editNewsAC: (state: IState, action: PayloadAction<INews>) => {
      state.news = state.news.map((item: INews) =>
        item?._id === action.payload._id ? { ...item, ...action.payload } : item
      );
    },
    deleteNewsAC: (state: IState, action: PayloadAction<string>) => {
      state.news = state.news.filter((el) => el._id !== action.payload);
    },
  },
});

export const { actions } = newsSlice;
export default newsSlice.reducer;
