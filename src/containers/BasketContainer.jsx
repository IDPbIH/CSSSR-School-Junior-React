import { connect } from 'react-redux';
import { Basket } from '../components/Basket/Basket';
import { getBasket, getError, getLoading, getResult, saveBasket } from '../store/basketReducer';

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        result: getResult(state),
        error: getError(state),
        basket: getBasket(state)
    };
};

export default connect(mapStateToProps, { saveBasket })(Basket);