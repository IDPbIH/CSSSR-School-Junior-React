import { connect } from 'react-redux';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import ProductList from '../components/ProductList/ProductList';
import withRouter from '../hoc/withRouter';

const mapStateToProps = (state) => {
    console.log('*')
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default withRouter(connect(mapStateToProps, null )(ProductList));