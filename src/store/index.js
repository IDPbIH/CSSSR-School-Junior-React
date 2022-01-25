import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';
import routingReducer from './routingReducer';

const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
const SET_STATE_FROM_HISTORY = 'SET_STATE_FROM_HISTORY';

export const setInitialState = () => ({ type: SET_INITIAL_STATE });
export const setStateFromHistory = (state) => ({ type: SET_STATE_FROM_HISTORY, state });

const reducer = combineReducers({
    mainPage: mainReducer,
    routing: routingReducer
});

export const store = createStore(reducer);