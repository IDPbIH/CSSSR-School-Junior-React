import ProductsJSON from '../products.json';

const CHANGE_MIN_PRICE_VALUE = 'CHANGE_MIN_PRICE_VALUE';
const CHANGE_MAX_PRICE_VALUE = 'CHANGE_MAX_PRICE_VALUE';
const CHANGE_DISCOUNT_VALUE = 'CHANGE_DISCOUNT_VALUE';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SET_FROM_HISTORY = 'SET_FROM_HISTORY';
const RESET_STATE = 'RESET_STATE';

const initialState = {
    minPriceValue: Math.min.apply(null, ProductsJSON.map(product => { return product.price; })),
    maxPriceValue: Math.max.apply(null, ProductsJSON.map(product => { return product.price; })),
    discountValue: 0,
    categories: [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()],
    categoriesSelected: [...new Set(ProductsJSON
        .filter(product => window.location.href.includes(product.category))
        .map(product => { return product.category; })
    )],
    products: ProductsJSON
};

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
                    : [...state.categoriesSelected, action.name]
            };
        case SET_FROM_HISTORY:
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

export const changeMinPriceValueAC = (value) => ({ type: CHANGE_MIN_PRICE_VALUE, value });
export const changeMaxPriceValueAC = (value) => ({ type: CHANGE_MAX_PRICE_VALUE, value });
export const changeDiscountValueAC = (value) => ({ type: CHANGE_DISCOUNT_VALUE, value });
export const selectCategoryAC = (name) => ({ type: SELECT_CATEGORY, name });
export const setFromHistoryAC = (state) => ({ type: SET_FROM_HISTORY, state });
export const resetStateAC = () => ({ type: RESET_STATE });

export default mainReducer;