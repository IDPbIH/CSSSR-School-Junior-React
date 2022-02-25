import { connect } from 'react-redux';
import BasketPage from '../components/BasketPage/BasketPage';
import { getProducts } from '../store/mainReducer';
import { getBasket } from '../store/basketReducer';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        basket: getBasket(state)
    };
};

export default connect(mapStateToProps)(BasketPage);