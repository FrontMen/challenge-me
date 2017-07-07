import {createStore, combineReducers} from 'redux';
import {playersReducer} from './reducers/players.reducer';

const reducers = combineReducers({
    players: playersReducer
});

export const store = createStore(reducers);