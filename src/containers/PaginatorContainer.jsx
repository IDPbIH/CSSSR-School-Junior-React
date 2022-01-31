import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import withRouter from '../hoc/withRouter';
import { getFilterValue, getPageSize, getProducts } from '../store/mainReducer';
import getFilteredProducts from '../utils/getFilteredProducts';

const mapStateToProps = (state, props) => {
    const filterValue = getFilterValue(state);
    const products = getProducts(state);

    return {
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(filterValue, products).length
    };
};

export default withRouter(connect(mapStateToProps, null)(Paginator));