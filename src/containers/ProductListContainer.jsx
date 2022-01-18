import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import memoize from '../utils/memoize';

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

const getFilteredProducts = memoize((products, minValue, maxValue, discountValue, categoriesSelected) => {
    return (
        products.filter(product => (
            isPriceInMinMaxRange(minValue, maxValue, product.price)
            &&
            isDiscountWorking(product.price, product.subPriceContent, discountValue)
            &&
            isCategorySelected(product.category, categoriesSelected)
        ))
    );
});

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProducts(
            state.mainPage.products,
            state.mainPage.minPriceValue,
            state.mainPage.maxPriceValue,
            state.mainPage.discountValue,
            state.mainPage.categoriesSelected)
    };
};

const ProductListContainer = connect(mapStateToProps)(ProductList);

export default ProductListContainer;