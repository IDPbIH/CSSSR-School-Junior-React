import React from 'react';
import s from './InputNumber.module.css'
import withSubscription from '../../hoc/withSubscription ';
import LogRender from '../../components/LogRender/LogRender';

class InputNumber extends LogRender {
    render() {
        return (
            <div className={s.wrapper}>
                <h3 className={s.title}>Цена</h3>
                <label>
                    от
                    <input
                        name='minPriceValue'
                        className={s.minValue + ' ' + (this.props.error && s.error)}
                        value={this.props.minPriceValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                    />
                    до
                    <input
                        name='maxPriceValue'
                        className={s.minValue + ' ' + (this.props.error && s.error)}
                        value={this.props.maxPriceValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                    />
                </label>
            </div>
        );
    }
}

export default withSubscription(InputNumber);