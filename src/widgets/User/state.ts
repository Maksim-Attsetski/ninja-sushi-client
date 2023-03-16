import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TUserWithGeneric } from './types';

interface IState {
  user: TUser;
}

const initialState: IState = {
  user: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserAC: (state: IState, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    editUserAC: (state: IState, action: PayloadAction<TUserWithGeneric>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
