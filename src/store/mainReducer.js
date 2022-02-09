import { createSelector } from 'reselect';
import getFilteredProducts from '../utils/getFilteredProducts';
import { getActiveCategoriesFromRouting, getActivePageFromRouting } from './routingReducer';

// Filter Module.js

// Actions
const SET_MIN_PRICE_VALUE = 'SET_MIN_PRICE_VALUE';
const SET_MAX_PRICE_VALUE = 'SET_MAX_PRICE_VALUE';
const SET_DISCOUNT_VALUE = 'SET_DISCOUNT_VALUE';
const SET_DEFAULT_FILTERS_VALUE = 'SET_DEFAULT_FILTERS_VALUE';
const SET_PRODUCTS_FROM_API = 'SET_PRODUCTS_FROM_API';
const SET_ERROR = 'SET_ERROR';

//initialState
const initialState = {
    result: '',
    message: '',
    loading: true,
    minPriceValue: 0,
    maxPriceValue: 0,
    discountValue: 0,
    categories: [],
    products: [],
    pageSize: 6
};

// Reducer
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MIN_PRICE_VALUE:
            return {
                ...state,
                minPriceValue: Number(action.value)
            };
        case SET_MAX_PRICE_VALUE:
            return {
                ...state,
                maxPriceValue: Number(action.value)
            };
        case SET_DISCOUNT_VALUE:
            return {
                ...state,
                discountValue: Number(action.value)
            };
        case SET_DEFAULT_FILTERS_VALUE:
            return {
                ...state,
                minPriceValue: Math.min.apply(null, state.products.map(product => product.price)),
                maxPriceValue: Math.max.apply(null, state.products.map(product => product.price)),
                discountValue: 0,
            };
        case SET_PRODUCTS_FROM_API:
            return {
                ...state,
                result: 'OK',
                loading: false,
                minPriceValue: action.products.length !== 0 ? Math.min.apply(null, action.products.map(product => product.price)) : 0,
                maxPriceValue: action.products.length !== 0 ? Math.max.apply(null, action.products.map(product => product.price)) : 0,
                categories: Array.from(new Set(action.products.map(product => product.category))),
                products: action.products
            };
        case SET_ERROR:
            return {
                ...state,
                result: 'ERROR',
                loading: false,
                message: action.error
            }
        default:
            return state;
    }
};

// Action Creators
export const setMinPriceValue = (value) => ({ type: SET_MIN_PRICE_VALUE, value });
export const setMaxPriceValue = (value) => ({ type: SET_MAX_PRICE_VALUE, value });
export const setDiscountValue = (value) => ({ type: SET_DISCOUNT_VALUE, value });
export const setDefaultFiltersValue = () => ({ type: SET_DEFAULT_FILTERS_VALUE });
export const setProductsFromAPI = (products) => ({ type: SET_PRODUCTS_FROM_API, products })
export const setError = (error) => ({ type: SET_ERROR, error })

// Selectors
export const getMinPriceValue = (state) => state.mainPage.minPriceValue;
export const getMaxPriceValue = (state) => state.mainPage.maxPriceValue;
export const getDiscountValue = (state) => state.mainPage.discountValue;
export const getPageSize = (state) => state.mainPage.pageSize;
export const getCategories = (state) => state.mainPage.categories;
export const getProducts = (state) => state.mainPage.products;
export const getResult= (state) => state.mainPage.result;
export const getMessage = (state) => state.mainPage.message;
export const getLoading = (state) => state.mainPage.loading;

export const getFilterValue = (state) => {
    return {
        minPriceValue: getMinPriceValue(state),
        maxPriceValue: getMaxPriceValue(state),
        discountValue: getDiscountValue(state)
    };
};

export const getFilteredProductsWithPagination = createSelector(
    getActivePageFromRouting, getActiveCategoriesFromRouting, getFilterValue, getPageSize, getProducts,
    (activePage, activeCategories, filterValue, pageSize, products) => {
        const filteredProducts = getFilteredProducts(activeCategories, filterValue, products);

        return filteredProducts.filter((product, index) => {
            index++
            const isFirstItemForActivePageRange = index >= (pageSize * (activePage - 1) + 1);
            const isLastItemForActivePageRange = index <= activePage * pageSize;

            return isFirstItemForActivePageRange && isLastItemForActivePageRange;
        })
    }
);

export default mainReducer;