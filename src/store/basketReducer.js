import { isProductInBasket } from '../utils/checks';

// Basket Module.js

// Actions
const SET_BASKET = 'SET_BASKET';

//initialState
const initialState = {
    products: [],
    result: '',
    loading: true,
    save: false//
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
        default:
            return state;
    }
};

// Action Creators
export const setBasket = (id) => ({ type: SET_BASKET, id });

//Thunk Creators
export const saveBasket = (basket) => {
    return (dispatch) => {
        fetch('https://course-api.school.csssr.com/save1', {
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
            .then(result => console.log(result.result))
            .catch(e => console.log(e.message));
    };
};

// Selectors
export const getBasket = (state) => state.basket.products;

export default basketReducer;