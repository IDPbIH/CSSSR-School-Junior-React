import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import ProductsJSON from '../../products.json';
import {StateContext} from '../../index';

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
            <StateContext.Consumer>
                {
                    (state) => (
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
                                            checked={category === state.category ? true : false}
                                            onChange={(e) => { this.props.handleStateChange('radio', e) }}
                                        />
                                        <label htmlFor={category}>{category}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    )
                }
            </StateContext.Consumer>
        );
    }
}

export default InputCategory;