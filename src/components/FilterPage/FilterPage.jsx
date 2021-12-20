import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';

const memoize = (fn) => {
    const prevCall = {
        args: []
    }
    return function (...args) {
        let equal = true
        args.forEach((el, index) => {
            equal = equal && prevCall.args[index] === el
        })
        if (!equal) {
            prevCall.args = args
            prevCall.result = fn(...args)
        }
        return prevCall.result
    }
}

class FilterList extends React.PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}

class FilterPage extends LogRender {
    renderInputNumber = memoize(
        (min,max,h) => <InputNumber
            minValue={min}
            maxValue={max}
            handleSubmit={h}
        />
    );

    renderInputDiscount = memoize(
        (d,h) => <InputDiscount
            discountValue={d}
            handleSubmit={h}
        />
    );

    render() {
        return (
            <form>
                <FilterList>
                    {this.renderInputNumber(this.props.minValue,this.props.maxValue,this.props.handleSubmit)}
                    {this.renderInputDiscount(this.props.discountValue,this.props.handleSubmit)}
                </FilterList>
            </form>
        );
    }
}

export default FilterPage;