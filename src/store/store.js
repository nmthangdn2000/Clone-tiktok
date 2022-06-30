import { configureStore } from '@reduxjs/toolkit';
import indexSlice from './indexSlice';
import mainScreenSlice from './mainScreenSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    index: indexSlice,
    mainScreen: mainScreenSlice,
  },
});
