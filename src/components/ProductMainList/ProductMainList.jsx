import React from 'react';
import styles from './ProductMainLIst.module.css';
import productList from '../../products.json';
import ProductItem from 'csssr-school-product-card';
import Star from '../Star/Star';

const ratingComponent = ({ isFilled }) => {
    return (<div className={styles.starFill}>{isFilled ? <Star design='filled' /> : <Star design='empty' />}</div>);
};

const ProductMainLIst = props => {
    const shortProductList = productList.slice(0, 3);
    return <div className={styles.wrapper}>
        {
            shortProductList.map(product => {
                return <ProductItem
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
            })
        }
    </div >
}

export default ProductMainLIst;