import React from 'react';
import { connect } from 'react-redux';
import s from './ProductPage.module.css';
import ProductItemHorizontal from '../ProductItemHorizontal/ProductItemHorizontal';
import RatingComponent from '../RatingComponent/RatingComponent';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getProducts } from '../../store/mainReducer';
import { BackButton } from '../Buttons/BackButton/BackButton';
import { getProductByIdFromURL } from '../../utils/getFromURL';

const ProductPage = ({ products }) => {
    const product = getProductByIdFromURL(products);

    if (!product.length) {
        return <ErrorPage title='Товар не найден' back />;
    }

    return (
        <div className={s.product_page}>
            {product.map(product => {
                return (
                    <div key={product.id}>
                        <h1 className={s.title}>
                            <BackButton />
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

export default connect((state) => {
    return {
        products: getProducts(state)
    };
})(ProductPage);