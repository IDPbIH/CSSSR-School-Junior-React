import { isCategoryActive } from '../utils/getFilteredProducts';
import { getActiveCategoriesFromURL, getPageFromURL } from '../utils/getFromURL';

// Routing Module.js

// Actions
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_ACTIVE_CATEGORIES = 'SET_ACTIVE_CATEGORIES';

//initialState
const initialState = {
    path: '/productlist',
    queryItems: {
        activePage: window.location.search ? Number(getPageFromURL[0]) : 1,
        activeCategories: getActiveCategoriesFromURL
    }
};

// Reducer
const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                path: '/productlist',
                queryItems: { ...state.queryItems, activePage: Number(action.page) }
            };
        case SET_ACTIVE_CATEGORIES:
            return {
                ...state,
                path: '/productlist',
                queryItems: {
                    ...state.queryItems,
                    activePage: 1,
                    activeCategories: isCategoryActive(state.queryItems.activeCategories, action.category)
                    // activeCategories: state.queryItems.activeCategories.includes(action.category)
                        ? state.queryItems.activeCategories.filter(category => category !== action.category)
                        : [...state.queryItems.activeCategories, action.category]
                }

            };
        case 'SET_STATE_FROM_HISTORY':
            return action.state.routing;
        case 'SET_DEFAULT_FILTERS_VALUE':
            return {
                ...initialState,
                queryItems: {
                    ...initialState.queryItems,
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
export const setActiveCategories = (category) => ({ type: SET_ACTIVE_CATEGORIES, category });

// Selectors
export const getRoutingState = (state) => state.routing;
export const getActivePage = (state) => state.routing.queryItems.activePage;
export const getActiveCategories = (state) => state.routing.queryItems.activeCategories;

export default routingReducer;