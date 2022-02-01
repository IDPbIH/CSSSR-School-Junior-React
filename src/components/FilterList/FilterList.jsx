import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';

import { Link } from 'react-router-dom';

class FilterList extends LogRender {
    render() {
        const { filterValue: { minPriceValue, maxPriceValue, discountValue }, categories,
            changeInputValue, setDefaultFiltersValue } = this.props;

        return (
            <div className={s.filterList}>
                <form>
                    {this.props.renderInputNumber(minPriceValue, maxPriceValue, changeInputValue)}
                    {this.props.renderInputDiscount(discountValue, changeInputValue)}
                    {this.props.renderInputCategory(categories)}
                </form>
                <Link to={'/'} replace>
                    <button className={s.reset_button} onClick={setDefaultFiltersValue}>Сбросить фильтры</button>
                </Link>
            </div>
        );
    }
}

export default FilterList;