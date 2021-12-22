import React from 'react';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
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

    render() {
        return (
            <form>
                {this.renderInputNumber(this.props.minPriceValue, this.props.maxPriceValue, this.props.handleStateChange)}
                {this.renderInputDiscount(this.props.discountValue, this.props.handleStateChange)}
            </form>
        );
    }
}

export default FilterList;