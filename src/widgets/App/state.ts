import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGeo } from 'shared';

interface IState {
  isAppLoading: boolean;
  isLoading: boolean;
  location: TGeo;
  userAgent: string;
}

const initialState: IState = {
  isAppLoading: true,
  isLoading: false,
  location: null,
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
    setLocationAC: (state: IState, action: PayloadAction<TGeo>) => {
      state.location = action.payload;
    },
    setUserAgentAC: (state: IState, action: PayloadAction<string>) => {
      state.userAgent = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { actions } = appSlice;
