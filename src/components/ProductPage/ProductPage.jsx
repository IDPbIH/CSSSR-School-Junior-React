import React from 'react';
import { connect } from 'react-redux';
import s from './ProductPage.module.css';
// import { getProduct } from '../../store/mainReducer';
import ProductItemHorizontal from '../ProductItemHorizontal/ProductItemHorizontal';
import RatingComponent from '../RatingComponent/RatingComponent';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useSearchParams } from 'react-router-dom';
import { getProduct } from '../../store/mainReducer';
import { BackButton } from '../Buttons/BackButton/BackButton';

const ProductPage = ({ product }) => {
    if (!product.length) {
        return <ErrorPage title='Товар не найден' back />;
    }

    return (
        <main className={s.product_page}>
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
        </main >
    );
}

export default connect((state) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    return {
        product: getProduct(state, id)
    };
})(ProductPage);