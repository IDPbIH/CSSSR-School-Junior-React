import React from 'react';
import styles from './ProductList.module.css';
import Star from '../Star/Star';
import LogRender from '../../components/LogRender/LogRender';
import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
    return (<div className={styles.star}>{isFilled ? <Star design='filled' /> : <Star design='empty' />}</div>);
};

class ProductList extends LogRender {
    render() {
        const { filteredProducts } = this.props;

        return (
            <div className={styles.grid}>
                {filteredProducts.map(product => {
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

export default ProductList;