import { createStore, combineReducers } from 'redux';
import { createSelector } from 'reselect';
import * as user from './reducers/user.reducer';
import * as players from './reducers/players.reducer';
import * as challenges from './reducers/challenges.reducer';
import * as nav from './reducers/nav.reducer';

const reducers = navigator => combineReducers({
  user: user.reducer,
  players: players.reducer,
  challenges: challenges.reducer,
  nav: nav.createNavReducer(navigator)
});

export default Navigator =>
  createStoreWithNavigator(createStore(getReducers(Navigator)));

/**
 * Global state selector functions
 */
const getUserState = state => state.user;
const getPlayersState = state => state.players;
const getChallengesState = state => state.challenges;

/**
 * User substate selector functions
 */
export const getUser = getUserState;

/**
 * Players collection substate selector functions
 */
export const getPlayers = createSelector(getPlayersState, players.getAll);
export const getPlayerEntities = createSelector(
  getPlayersState,
  players.getEntities
);

export const getMyChallenges = createSelector(
  getUserState,
  getChallengesState,
  (user, challenges) => {
    return challenges.filter(challenge => challenge.to === user.id);
  }
);
