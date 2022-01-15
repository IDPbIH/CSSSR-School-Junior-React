import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';

const reducer = combineReducers({
    mainPage: mainReducer
});

export const store = createStore(reducer);