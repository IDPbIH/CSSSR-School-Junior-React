import React from 'react';
import s from './InputNumber.module.css'
import withSubscription from '../../hoc/withSubscription ';
import LogRender from '../../containers/LogRender/LogRender';

class InputNumber extends LogRender {
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
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                        onFocus={this.props.handleOnFocus}
                        onBlur={this.props.handleOnBlur}
                    />
                    до
                    <input
                        name='maxValueInput'
                        className={s.maxValue}
                        value={this.props.maxValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                        onFocus={this.props.handleOnFocus}
                        onBlur={this.props.handleOnBlur}
                    />
                </div>
            </div>
        );
    }
}

export default withSubscription(InputNumber);