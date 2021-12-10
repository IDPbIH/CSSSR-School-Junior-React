import React from 'react';
import productsList from '../../products.json';
import style from './ProductsMainUL.module.css';

const ProductsMainUL = props => {
    return <ul>
        {
            productsList.map(product => {
                return product.id < 4 && <li key={product.id}>{product.name}</li>
            })
        }
    </ul>;
}

export default ProductsMainUL;