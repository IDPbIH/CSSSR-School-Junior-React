import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';

class Filters extends LogRender {
    render() {
        return (
            <form>
                <div>
                    <InputNumber
                        minValue={this.props.minValue}
                        maxValue={this.props.maxValue}
                        handleSubmit={this.props.handleSubmit}
                    />
                </div>
                <div>
                    <InputDiscount
                        discountValue={this.props.discountValue}
                        handleSubmit={this.props.handleSubmit}
                    />
                </div>
            </form>
        );
    }
}

export default Filters;