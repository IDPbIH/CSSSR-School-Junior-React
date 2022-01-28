import React from 'react';
import s from './ProductList.module.css';
import LogRender from '../../components/LogRender/LogRender';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';

class ProductList extends LogRender {
    render() {
        const { filteredProducts } = this.props;

        if (!filteredProducts.length) {
            return <ErrorPage title='Нет товаров, удовлетворющих условиям поиска. Измените значения фильтров.' />;
        }

        return (
            <div>
                <h1>Список товаров</h1>
                <div className={s.grid}>
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
                                ratingComponent={RatingComponent}
                            />
                        );
                    })}
                </div>
                <PaginatorContainer />
            </div >
        );
    }
}

export default ProductList;