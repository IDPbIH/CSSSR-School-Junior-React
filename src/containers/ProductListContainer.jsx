import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import withHistory from '../hoc/withHistory';
import { getFilteredProductsWithPagination, setMainStateFromHistory } from '../store/mainReducer';
import { setRoutingStateFromHistory } from '../store/routingReducer';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default connect(mapStateToProps, {setMainStateFromHistory, setRoutingStateFromHistory})(withHistory(ProductList));