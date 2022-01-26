export const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

export const isDiscountActive = (discount, minPrice, maxPrice) => {
    return minPrice <= (1 - discount / 100) * maxPrice;
};

export const isCategoryActive = (activeCategories, category) => {
    return activeCategories.includes(category);
};