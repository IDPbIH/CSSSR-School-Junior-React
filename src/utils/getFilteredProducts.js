import { isCategoryActive, isDiscountActive, isPriceInMinMaxRange } from './checks';
import memoize from './memoize';

const getFilteredProducts = memoize(({ minPriceValue, maxPriceValue, discountValue }, products) => {
    const searchParams = new URLSearchParams(window.location.search);
    const activeCategories = searchParams.getAll('category');
 
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