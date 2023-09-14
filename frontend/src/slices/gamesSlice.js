/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect';
import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const gamesAdapter = createEntityAdapter();

const gamesSlice = createSlice({
  name: 'games',
  initialState: gamesAdapter.getInitialState({
    currentGamelId: null,
  }),
  reducers: {
    addGames: gamesAdapter.addMany,
    addGame: gamesAdapter.addOne,
    removeGame(state, action) {
      gamesAdapter.removeOne(state, action);
      if (state.currentChannelId === action.payload) {
        state.currentChannelId = 1;
      }
    },
    renameGame: gamesAdapter.updateOne,
    setCurrentChannel(state, { payload }) {
      state.currentChannelId = payload;
    },
  },
});

export default gamesSlice.reducer;
export const selectors = gamesAdapter.getSelectors((state) => state.channels);
export const currenIdGame = (state) => state.games.currentGamelId;
export const gameIdSelector = createSelector(
  currenIdGame,
  (id) => id,
);
export const gameNameSelector = createSelector(
  selectors.selectAll,
  gameIdSelector,
  (games, id) => {
    const game = games.find((el) => el.id === id);
    if (game !== undefined) {
      return game.name;
    }
    return null;
  },
);
export const { actions } = gamesSlice;
