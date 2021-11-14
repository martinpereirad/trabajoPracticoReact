import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../components/global/global.slice';

export const store = configureStore({
    reducer: {
      global: globalReducer,
    },
  });
  