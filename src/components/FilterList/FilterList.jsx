import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';
import { Link } from 'react-router-dom';
import memoize from '../../utils/memoize';
import InputCategory from '../InputCategory/InputCategory';
import InputDiscount from '../InputDiscount/InputDiscount';
import InputNumber from '../InputNumber/InputNumber';

class FilterList extends LogRender {
    render() {
        const { setDefaultFiltersValue } = this.props;

        const renderInputNumber = memoize(
            (props) => <InputNumber
                minPriceValue={this.props.filterValue.minPriceValue}
                maxPriceValue={this.props.filterValue.maxPriceValue}
                changeInputValue={this.props.changeInputValue} />
        );

        const renderInputDiscount = memoize(
            (props) => <InputDiscount
                discountValue={this.props.filterValue.discountValue}
                changeInputValue={this.props.changeInputValue} />
        );

        const renderInputCategory = memoize(
            (props) => <InputCategory categories={this.props.categories} />
        );

        return (
            <div className={s.filterList}>
                <form>
                    {renderInputNumber(this.props)}
                    {renderInputDiscount(this.props)}
                    {renderInputCategory(this.props)}
                </form>
                <Link to={'/'} onClick={setDefaultFiltersValue}>
                    <button className={s.reset_button} >Сбросить фильтры</button>
                </Link>
            </div>
        );
    }
}

export default FilterList;