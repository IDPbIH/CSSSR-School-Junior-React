import ProductsJSON from '../products.json';

// Routing Module.js

// Actions
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_ACTIVE_CATEGORIES = 'SET_ACTIVE_CATEGORIES';
const SET_ROUTING_FROM_HISTORY = 'SET_ROUTING_FROM_HISTORY';

//initialState
const initialState = {
    path: '/products',
    url: '/',
    query: {
        activePage: 1,
        activeCategories: [...new Set(ProductsJSON
            .filter(product => window.location.href.includes(product.category))
            .map(product => { return product.category; })
        )]
    }
};

// Reducer
const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                path: '/products',
                url: action.url,
                query: { ...state.query, activePage: Number(action.page) }
            };
        case SET_ACTIVE_CATEGORIES:
            return {
                ...state,
                path: '/products',
                url: action.url,
                query: {
                    ...state.query,
                    activeCategories: state.query.activeCategories.includes(action.name)
                        ? state.query.activeCategories.filter(category => category !== action.name)
                        : [...state.query.activeCategories, action.name],
                    activePage: 1
                }

            };
        case SET_ROUTING_FROM_HISTORY:
            return action.state.routing;
        default:
            return state;
    }
};

// Action Creators
export const setActivePage = (page) => ({ type: SET_ACTIVE_PAGE, page });
export const setActiveCategories = (name) => ({ type: SET_ACTIVE_CATEGORIES, name });
export const setRoutingFromHistoryAC = (state) => ({ type: SET_ROUTING_FROM_HISTORY, state });

// Selectors
export const getActivePage = (state) => state.routing.query.activePage;
export const getActiveCategories = (state) => state.routing.query.activeCategories;

export default routingReducer;