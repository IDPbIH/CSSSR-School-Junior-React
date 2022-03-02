import { connect } from 'react-redux';
import ProductPage from '../components/ProductPage/ProductPage';
import { getProducts } from '../store/main/selectors';
import { getProductID } from '../store/routing/selectors';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        productID: getProductID(state)
    };
};

export default connect(mapStateToProps)(ProductPage);