import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';

class FilterList extends LogRender {
    setDefault = (event) => {
        event.preventDefault();
        this.props.resetStateAC();
    }

    render() {
        const { filterValue: {minPriceValue, maxPriceValue, discountValue, categoriesSelected}, categories, 
            changeInputValue, selectCategoryAC } = this.props;

        return (
            <div>
                <form>
                    {this.props.renderInputNumber(minPriceValue, maxPriceValue, changeInputValue)}
                    {this.props.renderInputDiscount(discountValue, changeInputValue)}
                    {this.props.renderInputCategory(categories, categoriesSelected, selectCategoryAC)}
                </form>
                <button className={s.reset_button} onClick={this.setDefault}>Сбросить фильтры</button>
            </div>
        );
    }
}

export default FilterList;