import * as types from './types';

export const setBasket = (id) => ({ type: types.SET_BASKET, id });
export const clearBasket = () => ({ type: types.CLEAR_BASKET });
export const setLoading = () => ({ type: types.SET_LOADING });
export const saveBasket = () => ({ type: types.SAVE_BASKET });
export const setError = (error) => ({ type: types.SET_ERROR, error });