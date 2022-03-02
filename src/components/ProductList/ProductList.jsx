import React from 'react';
import ProductItemContainer from '../../containers/ProductItemContainer';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './ProductList.module.css';

const ProductList = ({ products = [] }) => {
    return (
        <div className={s.grid}>
            {products.map(product => {
                return (
                    <ProductItemContainer column
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        discount={product.discount}
                        stars={product.stars}
                        status={product.status}
                        ratingComponent={RatingComponent}
                        key={product.id}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;