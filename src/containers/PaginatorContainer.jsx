import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import { getFilterValue, getPageSize, getProducts } from '../store/mainReducer';
import { getActiveCategoriesFromRouting, getActivePageFromRouting } from '../store/routingReducer';
import getFilteredProducts from '../utils/getFilteredProducts';

const mapStateToProps = (state) => {
    const activeCategories = getActiveCategoriesFromRouting(state);
    const filterValue = getFilterValue(state);
    const products = getProducts(state);

    return {
        activePage: getActivePageFromRouting(state),
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(activeCategories, filterValue, products).length
    };
};

export default connect(mapStateToProps)(Paginator);