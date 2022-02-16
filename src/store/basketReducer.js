import { isProductInBasket } from '../utils/checks';

// Basket Module.js

// Actions
const SET_BASKET = 'basket/SET_BASKET';
const SET_RESULT_FROM_API = 'basket/SET_RESULT_FROM_API';
const SET_ERROR = 'basket/SET_ERROR';
const SET_LOADING = 'basket/SET_LOADING';

//initialState
const initialState = {
    products: [],
    result: '',
    loading: false,
    save: false,
    error: ''
};

// Reducer
const basketReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                products: isProductInBasket(state.products, action.id)
                    ? state.products.filter(id => id !== action.id)
                    : [...state.products, action.id]
            }
        case SET_RESULT_FROM_API:
            return {
                ...state,
                loading: false,
                result: action.result
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
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
export const setResultFromAPI = (result) => ({ type: SET_RESULT_FROM_API, result });
export const setError = (error) => ({ type: SET_ERROR, error });
export const setLoading = () => ({ type: SET_LOADING });

//Thunk Creators
export const saveBasket = (basket) => {
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
            .then(result => dispatch(setResultFromAPI(result.result)))
            .catch(e => dispatch(setError('Ошибка. Корзина не сохранена')));
    };
};

// Selectors
export const getBasket = (state) => state.basket.products;
export const getResult = (state) => state.basket.result;
export const getError = (state) => state.basket.error;
export const getLoading = (state) => state.basket.loading;

export default basketReducer;