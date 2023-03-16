import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIngredient } from 'widgets/Product';
import { IUser } from 'widgets/User';

type TUserWithGeneric = IUser<string | IIngredient>;
type TUser = TUserWithGeneric | null;

interface IState {
  isAuth: boolean;
  user: TUser;
}

const initialState: IState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state: IState, action: PayloadAction<TUser>) => {
      if (action.payload?._id) {
        state.isAuth = true;
        state.user = action.payload;
      } else {
        state.isAuth = false;
        state.user = null;
      }
    },
    editUser: (state: IState, action: PayloadAction<TUserWithGeneric>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
