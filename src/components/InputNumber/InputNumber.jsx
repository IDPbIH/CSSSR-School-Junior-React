import React from 'react';
import s from './InputNumber.module.css'

class InputNumber extends React.Component {
    handleChange = (e) => {
        !isNaN(e.target.value) && this.props.handleSubmit(e.target.value, e.target.name);
    }

    handleClick = (e) => {
        e.target.value = '';
        e.preventDefault();
    }

    render() {
        return (
            <div className={s.wrapper}>
                <h3 className={s.title}>Цена</h3>
                <div className={s.inputs}>
                    от
                    <input
                        name='minValueInput'
                        className={s.minValue}
                        value={this.props.minValue}
                        onClick={this.handleClick}
                        onChange={this.handleChange}
                    />
                    до
                    <input
                        name='maxValueInput'
                        className={s.maxValue}
                        value={this.props.maxValue}
                        onClick={this.handleClick}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default InputNumber;