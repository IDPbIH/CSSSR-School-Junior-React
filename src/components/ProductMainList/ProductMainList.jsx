import React from 'react';
import styles from './ProductMainList.module.css';
import ProductItem from 'csssr-school-product-card';
import Star from '../Star/Star';

const ratingComponent = ({ isFilled }) => {
    return (<div className={styles.star}>{isFilled ? <Star design='filled' /> : <Star design='empty' />}</div>);
};

const ProductMainList = ({shortProductList}) => { 
    return (
        <div className={styles.wrapper}>
            {shortProductList.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        isInStock={product.isInStock}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        subPriceContent={' ' + product.subPriceContent}
                        maxRating={product.maxRating}
                        rating={product.rating}
                        ratingComponent={ratingComponent}
                    />
                );
            })}
        </div >
    );
}

export default ProductMainList;