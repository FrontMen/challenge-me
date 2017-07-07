import {createStore, combineReducers} from 'redux';
import {createSelector} from 'reselect';
import * as user from './reducers/user.reducer';
import * as players from './reducers/players.reducer';
import * as challenges from './reducers/challenges.reducer';
import * as nav from './reducers/nav.reducer';

const reducers = combineReducers({
    user: user.reducer,
    players: players.reducer,
    challenges: challenges.reducer,
    nav: nav.reducer
});

export default createStore(reducers);

/**
 * Global state selector functions
 */
const getUserState = state => state.user;
const getPlayersState = state => state.players;
const getChallengesState = state => state.challenges;
const getNavigationState = state => state.nav;

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

/**
 * Challenges collection substate selector functions
 */
export const getAllChallenges = createSelector(getChallengesState, challenges.getAll);

export const getMyChallenges = createSelector(
    getUserState,
    getChallengesState,
    (user, challenges) => {
        return challenges.filter(challenge => challenge.to === user.id);
    }
);

export const getChallenges = createSelector(
    getNavigationState, getAllChallenges, (navigation, challenges) => {
        const selectedUserId = navigation.routes[navigation.index].params.id;
        return challenges.filter(challenge => challenge.to === selectedUserId);
    }
)
