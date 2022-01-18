import React from 'react';
import s from './InputDiscount.module.css'
import Discount from 'csssr-school-input-discount';
import withHandle from '../../hoc/withHandle';
import LogRender from '../../components/LogRender/LogRender';

class InputDiscount extends LogRender {
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


export default withHandle(InputDiscount);