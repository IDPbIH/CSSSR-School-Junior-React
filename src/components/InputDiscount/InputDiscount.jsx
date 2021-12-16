import React from 'react';
import s from './InputDiscount.module.css'
import Discount from 'csssr-school-input-discount';


class InputDiscount extends React.Component {
    handleChange = (e) => {
        !isNaN(e.target.value) && this.props.handleSubmit(e.target.value, e.target.name);
    }

    handleClick = (e) => {
        e.target.value = '';
        e.preventDefault();
    }

    render() {
        return (
            <div className={s.discount}>
                <Discount
                    title='Скидка'
                    name='discountInput'
                    value={this.props.discountValue}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                />
            </div>

        );
    }
}


export default InputDiscount;