import ProductsJSON from '../products.json';

// Routing Module.js

// Actions
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_ACTIVE_CATEGORIES = 'SET_ACTIVE_CATEGORIES';
const SET_ROUTING_STATE_FROM_HISTORY = 'SET_ROUTING_STATE_FROM_HISTORY';
const SET_INITIAL_ROUTING_STATE = 'SET_INITIAL_ROUTING_STATE';

//initialState
const initialState = {
    path: '/productList',
    queryItems: {
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
        case SET_ROUTING_STATE_FROM_HISTORY:
            return action.state.routing;
        case SET_INITIAL_ROUTING_STATE:
            return {
                ...initialState,
                queryItems: {
                    ...state.queryItems,
                    activePage: 1,
                    activeCategories: []
                }
            };
        default:
            return state;
    }
};

// Action Creators
export const setActivePage = (page) => ({ type: SET_ACTIVE_PAGE, page });
export const setActiveCategories = (name) => ({ type: SET_ACTIVE_CATEGORIES, name });
export const setRoutingStateFromHistory = (state) => ({ type: SET_ROUTING_STATE_FROM_HISTORY, state });
export const setInitialRoutingState = () => ({ type: SET_INITIAL_ROUTING_STATE });

// Selectors
export const getActivePage = (state) => state.routing.queryItems.activePage;
export const getActiveCategories = (state) => state.routing.queryItems.activeCategories;

export default routingReducer;