import { isProductInBasket } from '../utils/checks';

// Basket Module.js

// Actions
const SET_BASKET = 'basket/SET_BASKET';
const CLEAR_BASKET = 'basket/CLEAR_BASKET';
const SAVE_BASKET = 'basket/SAVE_BASKET';
const SET_ERROR = 'basket/SET_ERROR';
const SET_LOADING = 'basket/SET_LOADING';

//initialState
const initialState = {
    loading: false,
    save: false,
    error: '',
    products: []
};

// Reducer
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                products: isProductInBasket(state.products, action.id)
                    ? state.products.filter(id => id !== action.id)
                    : [...state.products, action.id]
            }
        case CLEAR_BASKET:
            return {
                ...state,
                products: [],
                save: false
            }
        case SAVE_BASKET:
            return {
                ...state,
                loading: false,
                save: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                save: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

// Action Creators
export const setBasket = (id) => ({ type: SET_BASKET, id });
export const clearBasket = () => ({ type: CLEAR_BASKET });
export const setLoading = () => ({ type: SET_LOADING });
const saveBasket = () => ({ type: SAVE_BASKET });
const setError = (error) => ({ type: SET_ERROR, error });

//Thunk Creators
export const sendBasket = (basket) => {
    return (dispatch) => {
        dispatch(setLoading());
        fetch('https://course-api.school.csssr.com/save', {
            method: 'POST',
            body: JSON.stringify(basket),
            mode: 'cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Проблемы с сетью.');
            }
        })
            .then(result => dispatch(saveBasket(result.result)))
            .catch(e => dispatch(setError('Ошибка. Корзина не сохранена')));
    };
};

// Selectors
export const getBasket = (state) => state.basket.products;
export const getSave = (state) => state.basket.save;
export const getError = (state) => state.basket.error;
export const getLoading = (state) => state.basket.loading;

export default basketReducer;