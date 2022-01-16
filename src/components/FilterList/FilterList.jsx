import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';

class FilterList extends LogRender {
    setDefault = (event) => {
        event.preventDefault();
        this.props.stateResetAC();
    }

    render() {
        const { minPriceValue, maxPriceValue, discountValue, categories, categoriesSelected,
            changeMinPriceValueAC, changeMaxPriceValueAC, changeDiscountValueAC, categorySelectionAC } = this.props;

        return (
            <form>
                {this.props.renderInputNumber(minPriceValue, maxPriceValue, changeMinPriceValueAC, changeMaxPriceValueAC)}
                {this.props.renderInputDiscount(discountValue, changeDiscountValueAC)}
                {this.props.renderInputCategory(categories, categoriesSelected, categorySelectionAC)}
                <button className={s.reset_button} onClick={this.setDefault}>Сбросить фильтры</button>
            </form>
        );
    }
}

export default FilterList;