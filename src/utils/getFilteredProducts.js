import memoize from './memoize';

const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

const isDiscountActive = (discount, minPrice, maxPrice) => {
    return minPrice <= (1 - discount / 100) * maxPrice;
};

export const isCategoryActive= (activeCategories, category) => {
    return activeCategories.includes(category);
};

const getFilteredProducts = memoize(({minPriceValue, maxPriceValue, discountValue, activeCategories}, products) => {
    return (
        products.filter(product => (
            isPriceInMinMaxRange(minPriceValue, maxPriceValue, product.price)
            &&
            isDiscountActive(discountValue, product.price, product.subPriceContent)
            &&
            isCategoryActive(activeCategories, product.category)
        ))
    );
});

export default getFilteredProducts;