import React from 'react';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
import InputCategory from '../InputCategory/InputCategory';
import memoize from '../../utils/memoize';


class FilterList extends LogRender {
    renderInputNumber = memoize(
        (minPriceValue, maxPriceValue, handleStateChange) => <InputNumber
            minPriceValue={minPriceValue}
            maxPriceValue={maxPriceValue}
            handleStateChange={handleStateChange}
        />
    );

    renderInputDiscount = memoize(
        (discountValue, handleStateChange) => <InputDiscount
            discountValue={discountValue}
            handleStateChange={handleStateChange}
        />
    );

    renderInputCategory = memoize(
        (category, handleStateChange) => <InputCategory
            category={category}
            handleStateChange={handleStateChange}
        />
    );

    render() {
        return (
            <form>
                {this.renderInputNumber(this.props.minPriceValue, this.props.maxPriceValue, this.props.handleStateChange)}
                {this.renderInputDiscount(this.props.discountValue, this.props.handleStateChange)}
                {this.renderInputCategory(this.props.category, this.props.handleStateChange)}
            </form>
        );
    }
}

export default FilterList;