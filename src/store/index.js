import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import mainReducer from './main/reducer';
import basketReducer from './basket/reducer';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reducer = (history) => combineReducers({
    main: mainReducer,
    basket: basketReducer,
    router: connectRouter(history)
});

export const store = createStore(reducer(history), {}, composeEnhancers(applyMiddleware(
    thunk,
    routerMiddleware(history)
)));