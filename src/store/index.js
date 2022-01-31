import { createStore, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import mainReducer from './mainReducer';

export const history = createBrowserHistory();

const reducer = (history) => combineReducers({
    mainPage: mainReducer,
    router: connectRouter(history)
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer(history), {}, devtools);