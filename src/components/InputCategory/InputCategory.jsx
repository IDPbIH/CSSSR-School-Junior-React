import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';

class InputCategory extends LogRender {
    constructor(props) {
        super(props)

        this.categories = new Set(
            this.props.products.map(product => {
                return product.category;
            })
        );
    }


    render() {
        return (
            <div>
                 {[...this.categories].map(category => {
                    return '|' + category + '|';
            })}
            </div>
        );
    }
}


export default InputCategory;