import React from 'react';
import withLogRender from '../../hoc/withLogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
import memoize from '../../utils/memoize';

class FilterPage extends withLogRender {
    renderInputNumber = memoize(
        (minPriceValue, maxPriceValue, handleSubmit) => <InputNumber
            minPriceValue={minPriceValue}
            maxPriceValue={maxPriceValue}
            handleSubmit={handleSubmit}
        />
    );

    renderInputDiscount = memoize(
        (discountValue, handleSubmit) => <InputDiscount
            discountValue={discountValue}
            handleSubmit={handleSubmit}
        />
    );

    render() {
        return (
            <form>
                {this.renderInputNumber(this.props.minPriceValue, this.props.maxPriceValue, this.props.handleSubmit)}
                {this.renderInputDiscount(this.props.discountValue, this.props.handleSubmit)}
            </form>
        );
    }
}

export default FilterPage;