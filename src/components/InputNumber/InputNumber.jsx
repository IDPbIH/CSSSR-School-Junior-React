import React from 'react';
import s from './InputNumber.module.css'
import withSubscription from '../../hoc/withSubscription ';
import LogRender from '../../components/LogRender/LogRender';
import { StateContext } from '../../index';

class InputNumber extends LogRender {
    render() {
        return (
            <StateContext.Consumer>
                {
                    (state) => (
                        <div className={s.numbers}>
                            <h3 className={s.title}>Цена</h3>
                            <label className={s.inputs}>
                                от
                                <input
                                    name='minPriceValue'
                                    className={s.minValue + ' ' + (this.props.error && s.error)}
                                    value={state.minPriceValue}
                                    onChange={this.props.handleChange}
                                    onClick={this.props.handleClick}
                                />
                                до
                                <input
                                    name='maxPriceValue'
                                    className={s.minValue + ' ' + (this.props.error && s.error)}
                                    value={state.maxPriceValue}
                                    onChange={this.props.handleChange}
                                    onClick={this.props.handleClick}
                                />
                            </label>
                        </div>
                    )
                }
            </StateContext.Consumer>
        );
    }
}

export default withSubscription(InputNumber);