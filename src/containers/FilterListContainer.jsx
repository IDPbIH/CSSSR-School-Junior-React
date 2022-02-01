import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterList from '../components/FilterList/FilterList';
import InputCategory from '../components/InputCategory/InputCategory';
import InputDiscount from '../components/InputDiscount/InputDiscount';
import InputNumber from '../components/InputNumber/InputNumber';
import { setMinPriceValue, setMaxPriceValue, setDiscountValue, getFilterValue, getCategories, setDefaultFiltersValue} from '../store/mainReducer';
import memoize from '../utils/memoize';

const renderInputNumber = memoize(
    (minPriceValue, maxPriceValue, changeInputValue) => <InputNumber
        minPriceValue={minPriceValue}
        maxPriceValue={maxPriceValue}
        changeInputValue={changeInputValue}
    />
);

const renderInputDiscount = memoize(
    (discountValue, changeInputValue) => <InputDiscount
        discountValue={discountValue}
        changeInputValue={changeInputValue}
    />
);

const renderInputCategory = memoize(
    (categories) => <InputCategory categories={categories} />
);

const changeInputValue = (event) => {
    switch (event.target.name) {
        case 'minPriceValue':
            return setMinPriceValue(event.target.value);
        case 'maxPriceValue':
            return setMaxPriceValue(event.target.value);
        case 'discountValue':
            return setDiscountValue(event.target.value);
        default:
    }
}

const mapStateToProps = (state) => {
    return {
        filterValue: getFilterValue(state),
        categories: getCategories(state),
    };
};

export default withRouter(connect(mapStateToProps, {
    changeInputValue,
    setDefaultFiltersValue,
    renderInputNumber,
    renderInputDiscount,
    renderInputCategory
})(FilterList));