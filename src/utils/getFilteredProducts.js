import memoize from './memoize';

const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

const isDiscountWorking = (discount, minPrice, maxPrice) => {
    return minPrice <= (1 - discount / 100) * maxPrice;
};

const isCategorySelected = (categoriesSelected, category) => {
    if (categoriesSelected.length === 0) return true
    else return categoriesSelected.includes(category);
};

const getFilteredProducts = memoize(({minPriceValue, maxPriceValue, discountValue, categoriesSelected}, products) => {
    return (
        products.filter(product => (
            isPriceInMinMaxRange(minPriceValue, maxPriceValue, product.price)
            &&
            isDiscountWorking(discountValue, product.price, product.subPriceContent)
            &&
            isCategorySelected(categoriesSelected, product.category)
        ))
    );
});

export default getFilteredProducts;