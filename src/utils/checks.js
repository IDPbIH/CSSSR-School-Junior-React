export const isPriceInMinMaxRange = (minValue, maxValue, price) => {
    return price >= minValue && price <= maxValue;
};

export const isDiscountWorking = (discount, minPrice, maxPrice) => {
    return minPrice <= (1 - discount / 100) * maxPrice;
};

export const isCategorySelected = (categoriesSelected, category) => {
    if (categoriesSelected.length === 0) return true
    else return categoriesSelected.includes(category);
};