import ProductsJSON from '../products.json';

// Routing Module.js

// Actions
const PUSHSTATE = 'PUSHSTATE';
// const REQUEST_PAGE_ITEMS = 'REQUEST_PAGE_ITEMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SET_ROUTING_FROM_HISTORY = 'SET_ROUTING_FROM_HISTORY';

//initialState
const initialState = {
    path: '/products',
    url: '/',
    query: {
        currentPage: 1,
        categoriesSelected: [...new Set(ProductsJSON
            .filter(product => window.location.href.includes(product.category))
            .map(product => { return product.category; })
        )]
    }
};

// Reducer
const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                path: '/products',
                url: action.url,
                query: { ...state.query, currentPage: Number(action.page) }
            };
        case SELECT_CATEGORY:
            return {
                ...state,
                path: '/products',
                url: action.url,
                query: {
                    ...state.query,
                    categoriesSelected: state.query.categoriesSelected.includes(action.name)
                        ? state.query.categoriesSelected.filter(category => category !== action.name)
                        : [...state.query.categoriesSelected, action.name],
                    currentPage: 1
                }

            };
        case PUSHSTATE:
            return {
                ...state,
                url: action.url
            };
        case SET_ROUTING_FROM_HISTORY:
            return action.state.routing;
        default:
            return state;
    }
};

// Action Creators
export const pushStateAC = (url) => ({ type: PUSHSTATE, url });
// export const requestPageItems = (pageNum) => ({ type: REQUEST_PAGE_ITEMS, pageNum });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const selectCategoryAC = (name) => ({ type: SELECT_CATEGORY, name });
export const setRoutingFromHistoryAC = (state) => ({ type: SET_ROUTING_FROM_HISTORY, state });

// Selectors
export const getCurrentPage = (state) => state.routing.query.currentPage;
export const getCategoriesSelected = (state) => state.routing.query.categoriesSelected;

export default routingReducer;