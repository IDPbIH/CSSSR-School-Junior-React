import React from 'react';
import s from './InputNumber.module.css'
import withHandle from '../../hoc/withHandle';
import LogRender from '../../components/LogRender/LogRender';
import { withRouter } from 'react-router-dom';

class InputNumber extends LogRender {
    render() {
        return (
            <div className={s.numbers}>
                <h3 className={s.title}>Цена</h3>
                <label className={s.inputs}>
                    от
                    <input
                        name='minPriceValue'
                        className={s.minValue + ' ' + (this.props.error && s.errorInputs)}
                        value={this.props.minPriceValue}
                        onChange={this.props.handleChange}
                    />
                    до
                    <input
                        name='maxPriceValue'
                        className={s.maxValue + ' ' + (this.props.error && s.errorInputs)}
                        value={this.props.maxPriceValue}
                        onChange={this.props.handleChange}
                    />
                </label>
                <p className={s.message + ' ' + (this.props.error && s.errorMessage)}>Используйте для ввода только цифры</p>
            </div>
        );
    }
}

export default withRouter(withHandle(InputNumber));