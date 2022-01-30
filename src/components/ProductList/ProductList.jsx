import React from 'react';
import s from './ProductList.module.css';
import LogRender from '../../components/LogRender/LogRender';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import FilterListContainer from '../../containers/FilterListContainer';
import { Link } from 'react-router-dom';

class ProductList extends LogRender {
    render() {
        const { filteredProducts } = this.props;

        if (!filteredProducts.length) {
            return <ErrorPage title='Нет товаров, удовлетворющих условиям поиска. Измените значения фильтров.' />;
        }

        return (
            <main className={s.product_list_with_filters}>
                <FilterListContainer />
                <div className={s.product_list}>
                    <h1 className={s.title}>Список товаров</h1>
                    <div className={s.grid}>
                        {filteredProducts.map(product => {
                            return (
                                <Link
                                    key={product.id}
                                    to={`/productpage?id=${product.id}`}
                                    style={{ textDecoration: 'none' }}>
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
                                </Link>
                            );
                        })}
                    </div>
                    <PaginatorContainer />
                </div >
            </main>
        );
    }
}

export default ProductList;