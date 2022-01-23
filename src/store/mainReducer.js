import ProductsJSON from '../products.json';
import { createSelector } from 'reselect';
import getFilteredProducts from '../utils/getFilteredProducts';

// Filter Module.js

// Actions
const CHANGE_MIN_PRICE_VALUE = 'CHANGE_MIN_PRICE_VALUE';
const CHANGE_MAX_PRICE_VALUE = 'CHANGE_MAX_PRICE_VALUE';
const CHANGE_DISCOUNT_VALUE = 'CHANGE_DISCOUNT_VALUE';
const SET_MAIN_FROM_HISTORY = 'SET_MAIN_FROM_HISTORY';
const RESET_STATE = 'RESET_STATE';

//initialState
const initialState = {
    minPriceValue: Math.min.apply(null, ProductsJSON.map(product => { return product.price; })),
    maxPriceValue: Math.max.apply(null, ProductsJSON.map(product => { return product.price; })),
    discountValue: 0,
    categories: [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()],
    products: ProductsJSON,
    pageSize: 3
};

// Reducer
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MIN_PRICE_VALUE:
            return {
                ...state,
                minPriceValue: Number(action.value)
            };
        case CHANGE_MAX_PRICE_VALUE:
            return {
                ...state,
                maxPriceValue: Number(action.value)
            };
        case CHANGE_DISCOUNT_VALUE:
            return {
                ...state,
                discountValue: Number(action.value)
            };
        case SET_MAIN_FROM_HISTORY:
            return action.state.mainPage;
        case RESET_STATE:
            return {
                ...initialState,
                categoriesSelected: []
            };
        default:
            return state;
    }
};

// Action Creators
export const changeMinPriceValueAC = (value) => ({ type: CHANGE_MIN_PRICE_VALUE, value });
export const changeMaxPriceValueAC = (value) => ({ type: CHANGE_MAX_PRICE_VALUE, value });
export const changeDiscountValueAC = (value) => ({ type: CHANGE_DISCOUNT_VALUE, value });
export const setMainFromHistoryAC = (state) => ({ type: SET_MAIN_FROM_HISTORY, state });
export const resetStateAC = () => ({ type: RESET_STATE });

// Selectors
export const getPageSize = (state) => state.mainPage.pageSize;
export const getCategories = (state) => state.mainPage.categories;
export const getProducts = (state) => state.mainPage.products;

export const getCurrentPage = (state) => state.routing.query.currentPage;

export const getFilterValue = (state) => {
    return {
        minPriceValue: state.mainPage.minPriceValue,
        maxPriceValue: state.mainPage.maxPriceValue,
        discountValue: state.mainPage.discountValue,
        categoriesSelected: state.routing.query.categoriesSelected
    };
};

export const getFilteredProductsWithPagination = createSelector(getFilterValue, getCurrentPage, getPageSize, getProducts,
    (filterValue, currentPage, pageSize, products) => {
        const filteredProducts = getFilteredProducts(filterValue, products);

        return filteredProducts.filter((product, index) =>
            (index + 1) >= (pageSize * (currentPage - 1) + 1)
            &&
            (index + 1) <= currentPage * pageSize
        )
    }
);

export default mainReducer;