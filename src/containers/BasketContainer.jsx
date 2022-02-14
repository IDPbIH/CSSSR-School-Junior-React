import { connect } from 'react-redux';
import { Basket } from '../components/Basket/Basket';
import { getBasket } from '../store/mainReducer';

const mapStateToProps = (state) => {
    return {
        totalProductCountInBasket: getBasket(state).length,
    };
};

export default connect(mapStateToProps)(Basket);