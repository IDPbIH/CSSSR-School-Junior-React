import * as types from './types';
import { isProductInBasket } from '../../utils/checks';

const initialState = {
    loading: false,
    save: false,
    error: '',
    products: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BASKET:
            return {
                ...state,
                products: isProductInBasket(state.products, action.id)
                    ? state.products.filter(id => id !== action.id)
                    : [...state.products, action.id]
            }
        case types.CLEAR_BASKET:
            return {
                ...state,
                products: [],
                save: false
            }
        case types.SAVE_BASKET:
            return {
                ...state,
                loading: false,
                save: true
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                save: false
            }
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default basketReducer;