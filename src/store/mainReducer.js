import ProductsJSON from '../products.json';
import { createSelector } from 'reselect';
import getFilteredProducts from '../utils/getFilteredProducts';

// Filter Module.js

// Actions
const CHANGE_MIN_PRICE_VALUE = 'CHANGE_MIN_PRICE_VALUE';
const CHANGE_MAX_PRICE_VALUE = 'CHANGE_MAX_PRICE_VALUE';
const CHANGE_DISCOUNT_VALUE = 'CHANGE_DISCOUNT_VALUE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SET_FROM_HISTORY = 'SET_FROM_HISTORY';
const RESET_STATE = 'RESET_STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

//initialState
const initialState = {
    minPriceValue: Math.min.apply(null, ProductsJSON.map(product => { return product.price; })),
    maxPriceValue: Math.max.apply(null, ProductsJSON.map(product => { return product.price; })),
    discountValue: 0,
    categories: [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()],
    categoriesSelected: [...new Set(ProductsJSON
        .filter(product => window.location.href.includes(product.category))
        .map(product => { return product.category; })
    )],
    products: ProductsJSON,
    currentPage: 1,
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
        case SELECT_CATEGORY:
            return {
                ...state,
                categoriesSelected: state.categoriesSelected.includes(action.name)
                    ? state.categoriesSelected.filter(category => category !== action.name)
                    : [...state.categoriesSelected, action.name],
                currentPage: 1
            };
        case SET_FROM_HISTORY:
            return action.state.mainPage;
        case RESET_STATE:
            return {
                ...initialState,
                categoriesSelected: []
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: Number(action.page)
            }
        default:
            return state;
    }
};

// Action Creators
export const changeMinPriceValueAC = (value) => ({ type: CHANGE_MIN_PRICE_VALUE, value });
export const changeMaxPriceValueAC = (value) => ({ type: CHANGE_MAX_PRICE_VALUE, value });
export const changeDiscountValueAC = (value) => ({ type: CHANGE_DISCOUNT_VALUE, value });
export const selectCategoryAC = (name) => ({ type: SELECT_CATEGORY, name });
export const setFromHistoryAC = (state) => ({ type: SET_FROM_HISTORY, state });
export const resetStateAC = () => ({ type: RESET_STATE });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page })

// Selectors
export const getCurrentPage = (state) => state.mainPage.currentPage;
export const getPageSize = (state) => state.mainPage.pageSize;
export const getCategories = (state) => state.mainPage.categories;
export const getCategoriesSelected = (state) => state.mainPage.categoriesSelected;
export const getProducts = (state) => state.mainPage.products;

export const getFilterValue = (state) => {
    return {
        minPriceValue: state.mainPage.minPriceValue,
        maxPriceValue: state.mainPage.maxPriceValue,
        discountValue: state.mainPage.discountValue,
        categoriesSelected: state.mainPage.categoriesSelected
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