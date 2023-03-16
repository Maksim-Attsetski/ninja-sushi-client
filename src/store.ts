import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'widgets/App';
import { userReducer } from 'widgets/User';
import { authReducer } from 'widgets/Auth';
import { productReducer } from 'widgets/Product';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
