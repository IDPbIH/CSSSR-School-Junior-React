import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterList from '../components/FilterList/FilterList';
import { getCategories, getFilterValue } from '../store/main/selectors';
import { getActiveCategoriesFromRouting } from '../store/routing/selectors';
import { setMinPriceValue, setMaxPriceValue, setDiscountValue, setDefaultFiltersValue} from '../store/main/actions';

const changeInputValue = ({target:{name, value}}) => {
    switch (name) {
        case 'minPriceValue':
            return setMinPriceValue(value);
        case 'maxPriceValue':
            return setMaxPriceValue(value);
        case 'discountValue':
            return setDiscountValue(value);
        default:
    }
}

const mapStateToProps = (state) => {
    return {
        filterValue: getFilterValue(state),
        categories: getCategories(state),
        activeCategories: getActiveCategoriesFromRouting(state)
    };
};

export default withRouter(connect(mapStateToProps, {
    changeInputValue,
    setDefaultFiltersValue
})(FilterList));