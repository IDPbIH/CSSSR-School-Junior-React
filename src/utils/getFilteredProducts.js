import { isCategoryActive, isDiscountActive, isPriceInMinMaxRange } from './checks';
import { getActiveCategoriesFromURL } from './getFromURL';
import memoize from './memoize';

const getFilteredProducts = memoize(({ minPriceValue, maxPriceValue, discountValue }, products) => {
    const activeCategories = getActiveCategoriesFromURL();
    return (
        products.filter(product => (
            isPriceInMinMaxRange(minPriceValue, maxPriceValue, product.price)
            &&
            isDiscountActive(discountValue, product.price, product.subPriceContent)
            &&
            (isCategoryActive(activeCategories, product.category) || activeCategories.length === 0)
        ))
    );
});

export default getFilteredProducts;