import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';
import modalSlice from './modalSlice';

export default configureStore({
  reducer: {
    games: gamesReducer,
    modal: modalSlice,
  },
});
