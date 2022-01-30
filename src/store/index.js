import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';
import routingReducer from './routingReducer';

const SET_DEFAULT_FILTERS_VALUE = 'SET_DEFAULT_FILTERS_VALUE';
const SET_STATE_FROM_HISTORY = 'SET_STATE_FROM_HISTORY';

export const setDefaultFiltersValue = () => ({ type: SET_DEFAULT_FILTERS_VALUE });
export const setStateFromHistory = (state) => ({ type: SET_STATE_FROM_HISTORY, state });

const reducer = combineReducers({
    mainPage: mainReducer,
    // routing: routingReducer
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, {}, devtools);