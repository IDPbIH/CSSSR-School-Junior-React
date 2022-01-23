import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';
import routingReducer from './routingReducer';

const reducers = combineReducers({
    mainPage: mainReducer,
    routing: routingReducer
});

export const store = createStore(reducers);