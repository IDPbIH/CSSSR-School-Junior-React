import memoize from '../utils/memoize';
import ProductsJSON from '../products.json';

const CHANGE_MIN_PRICE_VALUE = 'CHANGE_MIN_PRICE_VALUE';
const CHANGE_MAX_PRICE_VALUE = 'CHANGE_MAX_PRICE_VALUE';
const CHANGE_DISCOUNT_VALUE = 'CHANGE_DISCOUNT_VALUE';
const CATEGORY_SELECTION = 'CATEGORY_SELECTION';
const STATE_RESET = 'STATE_RESET';

const ProductsJSONPriceArray = ProductsJSON.map(product => {
    return product.price;
});

const categoriesFormation = () => {
    return [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()];
};

const categoriesSelectedFormation = () => {
    return [...new Set(ProductsJSON
        .filter(product => window.location.href.includes(product.category))
        .map(product => { return product.category; })
    )];
};

const getFilteredProducts = memoize((minValue, maxValue, discountValue, categoriesSelected) => {
    return (
        ProductsJSON.filter(product => (
            isPriceInMinMaxRange(minValue, maxValue, product.price)
            &&
            isDiscountWorking(product.price, product.subPriceContent, discountValue)
            &&
            isCategorySelected(product.category, categoriesSelected)
        ))
    );
});

const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

const isDiscountWorking = (minPrice, maxPrice, discount) => {
    return minPrice <= (1 - discount / 100) * maxPrice;
};

const isCategorySelected = (category, categoriesSelected) => {
    if (categoriesSelected.length === 0) return true
    else return categoriesSelected.includes(category);
};

const initialState = {
    minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
    maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
    discountValue: 0,
    categories: categoriesFormation(),
    categoriesSelected: categoriesSelectedFormation(),
    products: getFilteredProducts(
        Math.min.apply(null, ProductsJSONPriceArray),
        Math.max.apply(null, ProductsJSONPriceArray),
        0,
        categoriesSelectedFormation()
    )
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MIN_PRICE_VALUE:
            return {
                ...state,
                minPriceValue: Number(action.value),
                products: getFilteredProducts(
                    Number(action.value),
                    state.maxPriceValue,
                    state.discountValue,
                    state.categoriesSelected)
            };
        case CHANGE_MAX_PRICE_VALUE:
            return {
                ...state,
                maxPriceValue: Number(action.value),
                products: getFilteredProducts(
                    state.minPriceValue,
                    Number(action.value),
                    state.discountValue,
                    state.categoriesSelected)
            };
        case CHANGE_DISCOUNT_VALUE:
            return {
                ...state,
                discountValue: Number(action.value),
                products: getFilteredProducts(
                    state.minPriceValue,
                    state.maxPriceValue,
                    Number(action.value),
                    state.categoriesSelected)
            };
        case CATEGORY_SELECTION:
            let updateCategoriesSelected;
            state.categoriesSelected.includes(action.name)
                ? updateCategoriesSelected = state.categoriesSelected.filter(category => category !== action.name)
                : updateCategoriesSelected = [...state.categoriesSelected, action.name]
            return {
                ...state,
                categoriesSelected: updateCategoriesSelected,
                products: getFilteredProducts(
                    state.minPriceValue,
                    state.maxPriceValue,
                    state.discountValue,
                    updateCategoriesSelected)
            };
        case STATE_RESET:
            return {
                ...initialState,
                categoriesSelected: [],
                products: getFilteredProducts(
                    Math.min.apply(null, ProductsJSONPriceArray),
                    Math.max.apply(null, ProductsJSONPriceArray),
                    0,
                    []
                )
            };
        default:
            return state;
    }
};

export const changeMinPriceValue = (value) => ({ type: CHANGE_MIN_PRICE_VALUE, value });
export const changeMaxPriceValue = (value) => ({ type: CHANGE_MAX_PRICE_VALUE, value });
export const changeDiscountValue = (value) => ({ type: CHANGE_DISCOUNT_VALUE, value });
export const categorySelection = (name) => ({ type: CATEGORY_SELECTION, name });
export const stateReset = () => ({ type: STATE_RESET });

export default mainReducer;