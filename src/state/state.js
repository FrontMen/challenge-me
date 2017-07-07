import {createStore, combineReducers} from 'redux';
import {playersReducer} from './reducers/players.reducer';

const reducers = combineReducers({
    players: playersReducer
});

export default createStore(reducers);

/**
 * Selector functions
 */
export const getPlayers = state => state.players;