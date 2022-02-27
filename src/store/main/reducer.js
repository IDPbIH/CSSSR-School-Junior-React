import * as types from './types';

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

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MIN_PRICE_VALUE:
            return {
                ...state,
                minPriceValue: Number(action.value)
            };
        case types.SET_MAX_PRICE_VALUE:
            return {
                ...state,
                maxPriceValue: Number(action.value)
            };
        case types.SET_DISCOUNT_VALUE:
            return {
                ...state,
                discountValue: Number(action.value)
            };
        case types.SET_DEFAULT_FILTERS_VALUE:
            return {
                ...state,
                minPriceValue: Math.min.apply(null, state.products.map(product => product.price)),
                maxPriceValue: Math.max.apply(null, state.products.map(product => product.price)),
                discountValue: 0,
            };
        case types.SET_PRODUCTS_FROM_API:
            return {
                ...state,
                result: 'OK',
                loading: false,
                minPriceValue: action.products.length !== 0 ? Math.min.apply(null, action.products.map(product => product.price)) : 0,
                maxPriceValue: action.products.length !== 0 ? Math.max.apply(null, action.products.map(product => product.price)) : 0,
                categories: Array.from(new Set(action.products.map(product => product.category))),
                products: action.products
            };
        case types.SET_ERROR:
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

export default mainReducer;