import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import { getCurrentPage, getFilterValue, getPageSize, getProducts, setCurrentPageAC } from '../store/mainReducer';
import getFilteredProducts from '../utils/getFilteredProducts';

const mapStateToProps = (state) => {
    const filterValue = getFilterValue(state);
    const products = getProducts(state);

    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(filterValue,products).length
    };
};

const PaginatorContainer = connect(mapStateToProps, {
    setCurrentPageAC
})(Paginator);

export default PaginatorContainer;