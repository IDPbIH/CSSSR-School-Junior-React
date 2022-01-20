import React from 'react';
import { connect } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import InputCategory from '../components/InputCategory/InputCategory';
import InputDiscount from '../components/InputDiscount/InputDiscount';
import InputNumber from '../components/InputNumber/InputNumber';
import withHistory from '../hoc/withHistory';
import { resetStateAC, setFromHistoryAC, changeMinPriceValueAC, changeMaxPriceValueAC, changeDiscountValueAC, selectCategoryAC, getFilterValue, getCategories } from '../store/mainReducer';
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
        categories: getCategories(state),
        dataForURL: state.mainPage.categoriesSelected
    };
};

const FilterListContainer = connect(mapStateToProps, {
    resetStateAC,
    selectCategoryAC,
    setFromHistoryAC,
    changeInputValue,
    renderInputNumber,
    renderInputDiscount,
    renderInputCategory
})(withHistory(FilterList));

export default FilterListContainer;