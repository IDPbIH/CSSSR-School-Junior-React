import { connect } from 'react-redux';
import FilteredProductList from '../components/FilteredProductList/FilteredProductList';
import { getFilteredProductsWithPagination, getPageSize, getProducts } from '../store/main/selectors';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        filteredProducts: getFilteredProductsWithPagination(state), 
        pageSize: getPageSize(state)
    };
};

export default connect(mapStateToProps)(FilteredProductList);