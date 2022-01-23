import React from 'react';
import { connect } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import InputCategory from '../components/InputCategory/InputCategory';
import InputDiscount from '../components/InputDiscount/InputDiscount';
import InputNumber from '../components/InputNumber/InputNumber';
import { resetStateAC, changeMinPriceValueAC, changeMaxPriceValueAC, changeDiscountValueAC, getFilterValue, getCategories } from '../store/mainReducer';
import { selectCategoryAC} from '../store/routingReducer';
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
    (categories, categoriesSelected, selectCategoryAC) => <InputCategory
        categories={categories}
        categoriesSelected={categoriesSelected}
        selectCategoryAC={selectCategoryAC}
    />
);

const changeInputValue = (event) => {
    switch (event.target.name) {
        case 'minPriceValue':
            return changeMinPriceValueAC(event.target.value);
        case 'maxPriceValue':
            return changeMaxPriceValueAC(event.target.value);
        case 'discountValue':
            return changeDiscountValueAC(event.target.value);
        default:
    }
}

const mapStateToProps = (state) => {
    return {
        filterValue: getFilterValue(state),
        categories: getCategories(state)
    };
};

const FilterListContainer = connect(mapStateToProps, {
    resetStateAC,
    selectCategoryAC,
    changeInputValue,
    renderInputNumber,
    renderInputDiscount,
    renderInputCategory
})(FilterList);

export default FilterListContainer;