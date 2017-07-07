import {createStore, combineReducers} from 'redux';
import {createSelector} from 'reselect';
import * as user from './reducers/user.reducer';
import * as players from './reducers/players.reducer';

const reducers = combineReducers({
    user: user.reducer,
    players: players.reducer
});

export default createStore(reducers);

/**
 * Global state selector functions
 */
const getUserState = state => state.user;
const getPlayersState = state => state.players;

/**
 * User substate selector functions
 */
export const getUser = getUserState;

/**
 * Players collection substate selector functions
 */
export const getPlayers = createSelector(getPlayersState, players.getAll);
export const getPlayerEntities = createSelector(getPlayersState, players.getEntities);