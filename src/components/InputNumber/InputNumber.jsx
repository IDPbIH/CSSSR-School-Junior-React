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
                        className={s.minValue}
                        value={minPriceValue}
                        onChange={handleChange}
                    />
                    до
                    <input
                        name='maxPriceValue'
                        className={s.maxValue}
                        value={maxPriceValue}
                        onChange={handleChange}
                    />
                </label>
                {error && <div className={s.error_message}>Используйте для ввода только цифры</div>}
            </div>
        );
    }
}

export default withHandle(InputNumber);