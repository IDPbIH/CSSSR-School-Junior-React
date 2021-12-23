import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import ProductsJSON from '../../products.json';
import {StateContext} from '../../index';

class InputCategory extends LogRender {
    constructor(props) {
        super(props)

        this.categories = [
            ...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product]))
            .values()
          ];    
    }

    render() {
        return (
            <StateContext.Consumer>
                {
                    (state) => (
                        <div className={s.categories}>
                        <h3 className={s.title}>Категории</h3>
                        <div className={s.form_radio_group}>
                            {this.categories.map((category, index) => {
                                return (
                                    <div className={s.form_radio_group_item} key={index}>
                                        <input
                                            type="radio"
                                            id={category.category}
                                            name={category.category}
                                            checked={category.category === window.location.pathname.substr(1) ? true : false}
                                            onChange={(e) => { this.props.handleStateChange('radio', e) }}
                                        />
                                        <label htmlFor={category.category}>{category.categoryName}</label>
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