import React from 'react';
import { connect } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import InputCategory from '../components/InputCategory/InputCategory';
import InputDiscount from '../components/InputDiscount/InputDiscount';
import InputNumber from '../components/InputNumber/InputNumber';
import withHistory from '../hoc/withHistory';
import { stateResetAC, changeMinPriceValueAC, changeMaxPriceValueAC, changeDiscountValueAC, categorySelectionAC } from '../store/mainReducer';
import memoize from '../utils/memoize';

const renderInputNumber = memoize(
    (minPriceValue, maxPriceValue, changeMinPriceValueAC, changeMaxPriceValueAC) => <InputNumber
        minPriceValue={minPriceValue}
        maxPriceValue={maxPriceValue}
        changeMinPriceValueAC={changeMinPriceValueAC}
        changeMaxPriceValueAC={changeMaxPriceValueAC}
    />
);

const renderInputDiscount = memoize(
    (discountValue, changeDiscountValueAC) => <InputDiscount
        discountValue={discountValue}
        changeDiscountValueAC={changeDiscountValueAC}
    />
);

const renderInputCategory = memoize(
    (categories, categoriesSelected, categorySelectionAC) => <InputCategory
        categories={categories}
        categoriesSelected={categoriesSelected}
        categorySelectionAC={categorySelectionAC}
    />
);

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
    stateResetAC,
    changeMinPriceValueAC,
    changeMaxPriceValueAC,
    changeDiscountValueAC,
    categorySelectionAC,
    renderInputNumber,
    renderInputDiscount,
    renderInputCategory
})(withHistory(FilterList));

export default FilterListContainer;