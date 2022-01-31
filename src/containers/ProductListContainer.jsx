import { connect } from 'react-redux';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import ProductList from '../components/ProductList/ProductList';
import withRouter from '../hoc/withRouter';
import { getActivePageFromURL } from '../utils/getFromURL';

const mapStateToProps = (state, props) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state, getActivePageFromURL())
    };
};

export default withRouter(connect(mapStateToProps, null)(ProductList));