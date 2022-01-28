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
            <div>
                <h1 className={s.title}>&#8592; Название первого товара</h1>
                {product.map(product => {
                    return (
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