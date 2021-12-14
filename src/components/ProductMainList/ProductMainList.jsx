import React from 'react';
import styles from './ProductMainList.module.css';
import ProductItem from 'csssr-school-product-card';
import Star from '../Star/Star';
import LogRender from '../../containers/LogRender/LogRender';

const ratingComponent = ({ isFilled }) => {
    return (<div className={styles.star}>{isFilled ? <Star design='filled' /> : <Star design='empty' />}</div>);
};

class ProductMainList extends LogRender {
    render () {
        return (
            <div className={styles.wrapper}>
                {this.props.shortProductList.map(product => {
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
}

export default ProductMainList;