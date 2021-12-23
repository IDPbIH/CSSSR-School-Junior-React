import React from 'react';
import styles from './ProductList.module.css';
import Star from '../Star/Star';
import LogRender from '../../components/LogRender/LogRender';
import ProductItem from 'csssr-school-product-card';
import { StateContext } from '../../index';

const ratingComponent = ({ isFilled }) => {
    return (<div className={styles.star}>{isFilled ? <Star design='filled' /> : <Star design='empty' />}</div>);
};

class ProductList extends LogRender {
    render() {
        return (
            <StateContext.Consumer>
                {
                    (state) => (
                        <div className={styles.wrapper}>
                            {state.products.map(product => {
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
                    )
                }
            </StateContext.Consumer>
        );
    }
}

export default ProductList;