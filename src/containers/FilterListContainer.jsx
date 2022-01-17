import React from 'react';
import { connect } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import InputCategory from '../components/InputCategory/InputCategory';
import InputDiscount from '../components/InputDiscount/InputDiscount';
import InputNumber from '../components/InputNumber/InputNumber';
import withHistory from '../hoc/withHistory';
import { resetStateAC, changeMinPriceValueAC, changeMaxPriceValueAC, changeDiscountValueAC, selectCategoryAC } from '../store/mainReducer';
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
        minPriceValue: state.mainPage.minPriceValue,
        maxPriceValue: state.mainPage.maxPriceValue,
        discountValue: state.mainPage.discountValue,
        categories: state.mainPage.categories,
        categoriesSelected: state.mainPage.categoriesSelected,
    };
};

const FilterListContainer = connect(mapStateToProps, {
    resetStateAC,
    selectCategoryAC,
    changeInputValue,
    renderInputNumber,
    renderInputDiscount,
    renderInputCategory
})(withHistory(FilterList));

export default FilterListContainer;