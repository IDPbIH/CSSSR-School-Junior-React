import React from 'react';
import s from './InputNumber.module.css'
import withSubscription from '../../hoc/withSubscription ';
import LogRender from '../../components/LogRender/LogRender';

class InputNumber extends LogRender {
    render() {
        return (
            <div className={s.numbers}>
                <h3 className={s.title}>Цена</h3>
                <label className={s.inputs}>
                    от
                    <input
                        name='minPriceValue'
                        className={s.minValue + ' ' + (this.props.error && s.error)}
                        value={this.props.mainPage.minPriceValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                    />
                    до
                    <input
                        name='maxPriceValue'
                        className={s.maxValue + ' ' + (this.props.error && s.error)}
                        value={this.props.mainPage.maxPriceValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                    />
                </label>
            </div>
        );
    }
}

export default withSubscription(InputNumber);