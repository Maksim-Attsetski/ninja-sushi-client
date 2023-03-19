import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'widgets/App';
import { orderReducer } from 'widgets/Order';
import { userReducer } from 'widgets/User';
import { authReducer } from 'widgets/Auth';
import { productReducer } from 'widgets/Product';
import { newsReducer } from 'widgets/News';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  auth: authReducer,
  order: orderReducer,
  app: appReducer,
  news: newsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
