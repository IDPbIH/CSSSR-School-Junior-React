import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
import InputCategory from '../InputCategory/InputCategory';
import memoize from '../../utils/memoize';

class FilterList extends LogRender {
    renderInputNumber = memoize(
        (handleStateChange) => <InputNumber handleStateChange={handleStateChange} />
    );

    renderInputDiscount = memoize(
        (handleStateChange) => <InputDiscount handleStateChange={handleStateChange} />
    );

    renderInputCategory = memoize(
        (handleStateChange) => <InputCategory handleStateChange={handleStateChange} />
    );

    render() {
        return (
            <form>
                {this.renderInputNumber(this.props.handleStateChange)}
                {this.renderInputDiscount(this.props.handleStateChange)}
                {this.renderInputCategory(this.props.handleStateChange)}
                <button className={s.reset_button} onClick={()=>{this.props.setInitialState('products')}}>Сбросить фильтры</button>
            </form>
        );
    }
}

export default FilterList;