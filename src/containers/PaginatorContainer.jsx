import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import { getFilterValue, getPageSize, getProducts } from '../store/mainReducer';
import getFilteredProducts from '../utils/getFilteredProducts';

const mapStateToProps = (state) => {
    const filterValue = getFilterValue(state);
    const products = getProducts(state);

    return {
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(filterValue, products).length
    };
};

const PaginatorContainer = connect(mapStateToProps, null)(Paginator);

export default PaginatorContainer;