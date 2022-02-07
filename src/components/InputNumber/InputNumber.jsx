import React from 'react';
import s from './InputNumber.module.css'
import withHandle from '../../hoc/withHandle';
import LogRender from '../../components/LogRender/LogRender';

class InputNumber extends LogRender {
    render() {
        const { minPriceValue, maxPriceValue, error, handleChange } = this.props;

        return (
            <div className={s.numbers}>
                <h3 className={s.title}>Цена</h3>
                <label className={s.inputs}>
                    от
                    <input
                        name='minPriceValue'
                        className={s.minValue + ' ' + (error && s.errorInputs)}
                        value={minPriceValue}
                        onChange={handleChange}
                    />
                    до
                    <input
                        name='maxPriceValue'
                        className={s.maxValue + ' ' + (error && s.errorInputs)}
                        value={maxPriceValue}
                        onChange={handleChange}
                    />
                </label>
                <p className={s.message + ' ' + (error && s.errorMessage)}>Используйте для ввода только цифры</p>
            </div>
        );
    }
}

export default withHandle(InputNumber);