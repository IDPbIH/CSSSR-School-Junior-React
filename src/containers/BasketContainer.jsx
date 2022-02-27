import { connect } from 'react-redux';
import Basket from '../components/Basket/Basket';
import { getError, getLoading, getProductsInBasket, getSave } from '../store/basket/selectors';
import { sendBasket } from '../store/basket/operations';
import { clearBasket } from '../store/basket/actions';

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        save: getSave(state),
        error: getError(state),
        productsInBasket: getProductsInBasket(state)
    };
};

export default connect(mapStateToProps, { sendBasket, clearBasket })(Basket);