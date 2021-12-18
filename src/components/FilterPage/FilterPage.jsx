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
        () => <InputNumber
            minValue={this.props.minValue}
            maxValue={this.props.maxValue}
            handleSubmit={this.props.handleSubmit}
        />
    );

    renderInputDiscount = memoize(
        () => <InputDiscount
            discountValue={this.props.discountValue}
            handleSubmit={this.props.handleSubmit}
        />
    );

    render() {
        return (
            <form>
                <FilterList>
                    {/* <InputNumber
                        minValue={this.props.minValue}
                        maxValue={this.props.maxValue}
                        handleSubmit={this.props.handleSubmit}
                    /> */}
                    {this.renderInputNumber(this.props.minValue,this.props.maxValue,this.props.handleSubmit)}
                    {this.renderInputDiscount(this.props.discountValue,this.props.handleSubmit)}
                </FilterList>
            </form>
        );
    }
}

export default FilterPage;