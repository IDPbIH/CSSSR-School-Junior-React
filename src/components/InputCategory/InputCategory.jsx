import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import ProductsJSON from '../../products.json';

class InputCategory extends LogRender {
    constructor(props) {
        super(props)

        this.categories = new Set(
            ProductsJSON.map(product => {
                return product.category;
            })
        );
    }

    render() {
        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                <div className={s.form_radio_group}>
                    {[...this.categories].map((category, index) => {
                        return (
                            <div className={s.form_radio_group_item} key={index}>
                                <input
                                    type="radio"
                                    id={category}
                                    name={category}
                                    checked={category === this.props.category ? true : false}
                                    onChange={(e)=>{this.props.handleStateChange('radio',e)}}
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default InputCategory;