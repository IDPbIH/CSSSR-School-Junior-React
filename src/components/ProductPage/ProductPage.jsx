import React from 'react';
import { connect } from 'react-redux';
import s from './ProductPage.module.css';
import { getProduct } from '../../store/mainReducer';
import ProductItemHorizontal from '../ProductItemHorizontal/ProductItemHorizontal';
import RatingComponent from '../RatingComponent/RatingComponent';
import ErrorPage from '../ErrorPage/ErrorPage';

class ProductPage extends React.Component {
    render() {
        const { product } = this.props;

        if (!product.length) {
            return <ErrorPage title='Товар не найден' back />;
        }


        return (
            <div className={s.product_page}>
                {product.map(product => {
                    return (
                        <div key={product.id}>
                            <h1 className={s.title}>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="black" />
                                </svg> 
                                {product.title}
                            </h1>
                            <ProductItemHorizontal
                                key={product.id}
                                isInStock={product.isInStock}
                                img={product.img}
                                title={product.title}
                                price={product.price}
                                subPriceContent={' ' + product.subPriceContent}
                                maxRating={product.maxRating}
                                rating={product.rating}
                                ratingComponent={RatingComponent}
                            />
                        </div>
                    );
                })}
            </div >
        );
    }
}

export default connect((state) => {
    return {
        product: getProduct(state)
    };
})(ProductPage);