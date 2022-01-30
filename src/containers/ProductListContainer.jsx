import { connect } from 'react-redux';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import ProductList from '../components/ProductList/ProductList';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default connect(mapStateToProps, null )(ProductList);