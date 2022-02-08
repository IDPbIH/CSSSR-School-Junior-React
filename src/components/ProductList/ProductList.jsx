import React from 'react';
import s from './ProductList.module.css';
import LogRender from '../../components/LogRender/LogRender';
import ProductItemVertical from '../ProductItemVertical/ProductItemVertical';
import RatingComponent from '../RatingComponent/RatingComponent';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import FilterListContainer from '../../containers/FilterListContainer';
import { Link } from 'react-router-dom';

class ProductList extends LogRender {
    render() {
        const { filteredProducts } = this.props;

        if (!filteredProducts.length) {
            return (
                <div className={s.product_list_with_filters}>
                    <FilterListContainer />
                    <div className={s.product_list}>
                        <ErrorPage title='Нет товаров, удовлетворющих условиям поиска. Измените значения фильтров.' />
                    </div>
                </div>);
        }

        return (
            <div className={s.product_list_with_filters}>
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
                                    <ProductItemVertical
                                       key={product.id}
                                       name={product.name}
                                       img={product.img}
                                       price={product.price}
                                       discount={product.discount}
                                       stars={product.stars}
                                       status={product.status}
                                       ratingComponent={RatingComponent}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <PaginatorContainer />
                </div >
            </div>
        );
    }
}

export default ProductList;