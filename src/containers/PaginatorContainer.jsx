import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import { getFilterValue, getPageSize, getProducts } from '../store/mainReducer';
import { setCurrentPageAC, getCurrentPage } from '../store/routingReducer';

import getFilteredProducts from '../utils/getFilteredProducts';

const mapStateToProps = (state) => {
    const filterValue = getFilterValue(state);
    const products = getProducts(state);

    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(filterValue, products).length
    };
};

const PaginatorContainer = connect(mapStateToProps, {setCurrentPageAC})(Paginator);

export default PaginatorContainer;