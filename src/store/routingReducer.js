import ProductsJSON from '../products.json';

// Routing Module.js

// Actions
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_ACTIVE_CATEGORIES = 'SET_ACTIVE_CATEGORIES';

//initialState
const { pathToRegexp } = require('path-to-regexp');
const regexp = pathToRegexp('\\?:page\\=(\\d+)?{(\\&:category\\=:name)}?{(\\&:category\\=:name)}?');
console.log(window.location.search);
console.log(regexp.exec('?page=1'));

const initialState = {
    path: '/productList',
    queryItems: {
        activePage: 1,
        activeCategories: [...new Set(ProductsJSON.filter(product => window.location.search.includes(product.category))
            .map(product => { return product.category; }))]
    }
};

// Reducer
const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                path: '/productList',
                queryItems: { ...state.queryItems, activePage: Number(action.page) }
            };
        case SET_ACTIVE_CATEGORIES:
            return {
                ...state,
                path: '/productList',
                queryItems: {
                    ...state.queryItems,
                    activePage: 1,
                    activeCategories: state.queryItems.activeCategories.includes(action.name)
                        ? state.queryItems.activeCategories.filter(category => category !== action.name)
                        : [...state.queryItems.activeCategories, action.name]
                }

            };
        case 'SET_STATE_FROM_HISTORY':
            return action.state.routing;
        case 'SET_INITIAL_STATE':
            return initialState;
        default:
            return state;
    }
};

// Action Creators
export const setActivePage = (page) => ({ type: SET_ACTIVE_PAGE, page });
export const setActiveCategories = (name) => ({ type: SET_ACTIVE_CATEGORIES, name });

// Selectors
export const getActivePage = (state) => state.routing.queryItems.activePage;
export const getActiveCategories = (state) => state.routing.queryItems.activeCategories;

export default routingReducer;