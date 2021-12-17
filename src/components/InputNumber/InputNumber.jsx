import React from 'react';
import s from './InputNumber.module.css'
import withSubscription from '../../hoc/withSubscription ';

class InputNumber extends React.Component {
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
                    />
                    до
                    <input
                        name='maxValueInput'
                        className={s.maxValue}
                        value={this.props.maxValue}
                        onChange={this.props.handleChange}
                        onClick={this.props.handleClick}
                    />
                </div>
            </div>
        );
    }
}

export default withSubscription(InputNumber);