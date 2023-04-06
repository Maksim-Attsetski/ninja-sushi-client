import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  isAppLoading: boolean;
  isLoading: boolean;
  userAgent: string;
}

const initialState: IState = {
  isAppLoading: true,
  isLoading: false,
  userAgent: navigator.userAgent,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsAppLoadingAC: (state: IState, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
    setIsLoadingAC: (state: IState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserAgentAC: (state: IState, action: PayloadAction<string>) => {
      state.userAgent = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { actions } = appSlice;
