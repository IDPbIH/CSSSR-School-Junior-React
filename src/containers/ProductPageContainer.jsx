import { connect } from 'react-redux';
import ProductPage from '../components/ProductPage/ProductPage';
import { getProducts } from '../store/mainReducer';
import { getProductID } from '../store/routingReducer';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        productID: getProductID(state)
    };
};

export default connect(mapStateToProps)(ProductPage);