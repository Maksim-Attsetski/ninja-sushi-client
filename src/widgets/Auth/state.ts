import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  isAuth: boolean;
}

const initialState: IState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthAC: (state: IState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
