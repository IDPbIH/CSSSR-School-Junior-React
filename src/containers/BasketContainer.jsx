import { connect } from 'react-redux';
import Basket from '../components/Basket/Basket';
import { getBasket, getError, getLoading, getSave, sendBasket, clearBasket} from '../store/basketReducer';

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        save: getSave(state),
        error: getError(state),
        basket: getBasket(state)
    };
};

export default connect(mapStateToProps, { sendBasket, clearBasket })(Basket);