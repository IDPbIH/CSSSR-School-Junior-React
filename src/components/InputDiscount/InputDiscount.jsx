import React from 'react';
import s from './InputDiscount.module.css'
import Discount from 'csssr-school-input-discount';
import withSubscription from '../../hoc/withSubscription ';
import LogRender from '../../containers/LogRender/LogRender';

class InputDiscount extends LogRender {
    render() {
        return (
            <div className={s.discount}>
                <Discount
                    title='Скидка'
                    name='discountInput'
                    value={this.props.discountValue}
                    onChange={this.props.handleChange}
                />
            </div>

        );
    }
}


export default withSubscription(InputDiscount);