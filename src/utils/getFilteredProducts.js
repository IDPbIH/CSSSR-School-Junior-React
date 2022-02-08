import { isCategoryActive, isDiscountActive, isPriceInMinMaxRange } from './checks';
import memoize from './memoize';

const getFilteredProducts = memoize((activeCategories, { minPriceValue, maxPriceValue, discountValue }, products) => {
    return (
        products.filter(product => (
            isPriceInMinMaxRange(minPriceValue, maxPriceValue, product.price)
            &&
            isDiscountActive(discountValue, product.discount)
            &&
            (isCategoryActive(activeCategories, product.category) || activeCategories.length === 0)
        ))
    );
});

export default getFilteredProducts;