import * as types from './types';

export const setMinPriceValue = (value) => ({ type: types.SET_MIN_PRICE_VALUE, value });
export const setMaxPriceValue = (value) => ({ type: types.SET_MAX_PRICE_VALUE, value });
export const setDiscountValue = (value) => ({ type: types.SET_DISCOUNT_VALUE, value });
export const setDefaultFiltersValue = () => ({ type: types.SET_DEFAULT_FILTERS_VALUE });
export const setProductsFromAPI = (products) => ({ type: types.SET_PRODUCTS_FROM_API, products });
export const setError = (error) => ({ type: types.SET_ERROR, error });