import { createSelector } from 'reselect';
import getFilteredProducts from '../../utils/getFilteredProducts';
import { getActiveCategoriesFromRouting, getActivePageFromRouting } from '../routing/selectors';

export const getMinPriceValue = (state) => state.main.minPriceValue;
export const getMaxPriceValue = (state) => state.main.maxPriceValue;
export const getDiscountValue = (state) => state.main.discountValue;
export const getPageSize = (state) => state.main.pageSize;
export const getCategories = (state) => state.main.categories;
export const getProducts = (state) => state.main.products;
export const getResult = (state) => state.main.result;
export const getMessage = (state) => state.main.message;
export const getLoading = (state) => state.main.loading;

export const getFilterValue = (state) => {
    return {
        minPriceValue: getMinPriceValue(state),
        maxPriceValue: getMaxPriceValue(state),
        discountValue: getDiscountValue(state)
    };
};

export const getFilteredProductsWithPagination = createSelector(
    getActivePageFromRouting, getActiveCategoriesFromRouting, getFilterValue, getPageSize, getProducts,
    (activePage, activeCategories, filterValue, pageSize, products) => {
        const filteredProducts = getFilteredProducts(activeCategories, filterValue, products);

        return filteredProducts.filter((product, index) => {
            index++
            const isFirstItemForActivePageRange = index >= (pageSize * (activePage - 1) + 1);
            const isLastItemForActivePageRange = index <= activePage * pageSize;

            return isFirstItemForActivePageRange && isLastItemForActivePageRange;
        })
    }
);