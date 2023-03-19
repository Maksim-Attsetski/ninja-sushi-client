import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  news: any[];
}

const initialState: IState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setNewsAC: (state: IState, action: PayloadAction<any[]>) => {
      state.news = action.payload;
    },
    addNewsAC: (state: IState, action: PayloadAction<any>) => {
      state.news = [...state.news, action.payload];
    },
    editNewsAC: (state: IState, action: PayloadAction<any>) => {
      state.news = state.news.map((item: any) =>
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
