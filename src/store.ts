import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'widgets/App';
import { authReducer } from 'widgets/Auth';
import { productReducer } from 'widgets/Product';

const rootReducer = combineReducers({
  app: appReducer,
  product: productReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
