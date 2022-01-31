import { createStore, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import mainReducer from './mainReducer';

export const history = createBrowserHistory();

const SET_DEFAULT_FILTERS_VALUE = 'SET_DEFAULT_FILTERS_VALUE';
const SET_STATE_FROM_HISTORY = 'SET_STATE_FROM_HISTORY';

export const setDefaultFiltersValue = () => ({ type: SET_DEFAULT_FILTERS_VALUE });
export const setStateFromHistory = (state) => ({ type: SET_STATE_FROM_HISTORY, state });

const reducer = (history) => combineReducers({
    mainPage: mainReducer,
    router: connectRouter(history)
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer(history), {}, devtools);