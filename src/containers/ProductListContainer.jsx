import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import withHistory from '../hoc/withHistory';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import { setStateFromHistory } from '../store';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default connect(mapStateToProps, { setStateFromHistory })(withHistory(ProductList));