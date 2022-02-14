import { connect } from 'react-redux';
import { Basket } from '../components/Basket/Basket';
import { getBasket, saveBasket } from '../store/basketReducer';

const mapStateToProps = (state) => {
    return {
        basket: getBasket(state)
    };
};

export default connect(mapStateToProps, { saveBasket })(Basket);