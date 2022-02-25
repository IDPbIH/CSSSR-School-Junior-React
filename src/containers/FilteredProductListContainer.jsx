import { connect } from 'react-redux';
import { getFilteredProductsWithPagination, getPageSize, getProducts } from '../store/mainReducer';
import FilteredProductList from '../components/FilteredProductList/FilteredProductList';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        filteredProducts: getFilteredProductsWithPagination(state), 
        pageSize: getPageSize(state)
    };
};

export default connect(mapStateToProps)(FilteredProductList);