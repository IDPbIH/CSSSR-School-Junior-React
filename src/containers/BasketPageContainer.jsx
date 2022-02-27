import { connect } from 'react-redux';
import BasketPage from '../components/BasketPage/BasketPage';
import { getProductsInBasket } from '../store/basket/selectors';

const mapStateToProps = (state) => {
    return {
        productsInBasket: getProductsInBasket(state)
    };
};

export default connect(mapStateToProps)(BasketPage);