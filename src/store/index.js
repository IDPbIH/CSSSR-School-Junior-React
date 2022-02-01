import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import mainReducer from './mainReducer';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reducer = (history) => combineReducers({
    mainPage: mainReducer,
    router: connectRouter(history)
});

export const store = createStore(reducer(history), {}, composeEnhancers(applyMiddleware(routerMiddleware(history))));