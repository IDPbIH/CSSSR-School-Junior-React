import { connect } from 'react-redux';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import ProductList from '../components/ProductList/ProductList';
import withRouter from '../hoc/withRouter';

const mapStateToProps = (state, props) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state, props)
    };
};

export default withRouter(connect(mapStateToProps, null)(ProductList));