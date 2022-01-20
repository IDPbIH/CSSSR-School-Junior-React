import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import { getFilteredProductsWithPagination } from '../store/mainReducer';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

const ProductListContainer = connect(mapStateToProps, null)(ProductList);

export default ProductListContainer;