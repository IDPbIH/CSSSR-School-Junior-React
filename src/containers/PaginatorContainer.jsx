import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';
import { getCurrentPage, getFilteredProducts, getPageSize, setCurrentPageAC } from '../store/mainReducer';

const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalFilteredProductCount: getFilteredProducts(state).length
    };
};

const PaginatorContainer = connect(mapStateToProps, {
    setCurrentPageAC
})(Paginator);

export default PaginatorContainer;