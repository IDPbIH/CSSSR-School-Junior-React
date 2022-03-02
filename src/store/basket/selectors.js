import { getProducts } from '../main/selectors';

export const getIDProductsInBasket = (state) => state.basket.products;
export const getProductsInBasket = (state) => {
    const products = getProducts(state);
    const basket = getIDProductsInBasket(state);

    return products.filter(product => basket.includes(product.id))
};
export const getSave = (state) => state.basket.save;
export const getError = (state) => state.basket.error;
export const getLoading = (state) => state.basket.loading;