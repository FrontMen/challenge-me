import {createStore, combineReducers} from 'redux';
import {createSelector} from 'reselect';
import * as players from './reducers/players.reducer';


const reducers = combineReducers({
    players: players.reducer
});

export default createStore(reducers);

/**
 * Selector functions
 */
const getPlayersState = state => state.players;
export const getPlayers = createSelector(getPlayersState, players.getAll);
export const getPlayerEntities = createSelector(getPlayersState, players.getEntities);