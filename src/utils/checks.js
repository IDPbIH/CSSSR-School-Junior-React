export const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

export const isDiscountActive = (discountValue, discount) => {
    return discountValue <= discount;
};

export const isCategoryActive = (activeCategories, category) => {
    return activeCategories.includes(category);
};