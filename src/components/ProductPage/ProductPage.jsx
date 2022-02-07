import React from 'react';
import s from './ProductPage.module.css';
import ProductItemHorizontal from '../ProductItemHorizontal/ProductItemHorizontal';
import RatingComponent from '../RatingComponent/RatingComponent';
import ErrorPage from '../ErrorPage/ErrorPage';
import { BackButton } from '../BackButton/BackButton';

const ProductPage = ({ products, productID }) => {
    const product = products.find(product => (product.id === Number(productID)));

    if (product === undefined) {
        return <ErrorPage title='Товар не найден' back />;
    }

    return (
        <div className={s.product_page}>
            <div>
                <h1 className={s.title}>
                    <BackButton />
                    {product.title}
                </h1>
                <ProductItemHorizontal
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
        </div >
    );
}

export default ProductPage;