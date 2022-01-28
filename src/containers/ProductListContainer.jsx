import { connect } from 'react-redux';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import { setStateFromHistory } from '../store';
import withHistory from '../hoc/withHistory';
import ProductList from '../components/ProductList/ProductList';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default connect(mapStateToProps, { setStateFromHistory })(withHistory(ProductList));