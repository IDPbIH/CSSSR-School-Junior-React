import React from 'react';
import s from './InputDiscount.module.css'
import Discount from 'csssr-school-input-discount';
import withSubscription from '../../hoc/withSubscription ';
import withLogRender from '../../hoc/withLogRender';

class InputDiscount extends withLogRender {
    render() {
        return (
            <div className={s.discount}>
                <Discount
                    title='Скидка'
                    name='discountValue'
                    value={this.props.discountValue}
                    onChange={this.props.handleChange}
                />
            </div>

        );
    }
}


export default withSubscription(InputDiscount);