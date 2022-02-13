import React from 'react';
import s from './ProductList.module.css';
import LogRender from '../../components/LogRender/LogRender';
import ProductItem from '../ProductItem/ProductItem';
import RatingComponent from '../RatingComponent/RatingComponent';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import FilterListContainer from '../../containers/FilterListContainer';
import { Link } from 'react-router-dom';
import { EmptyProduct } from '../EmptyProduct/EmptyProduct';
import { Basket } from '../Basket/Basket';

class ProductList extends LogRender {
    render() {
        const { products, filteredProducts, pageSize } = this.props;

        return (
            <div className={s.product_list_with_filters}>
                {filteredProducts.length !== 0 && <FilterListContainer />}
                <div className={s.product_list}>
                    <h1 className={s.title}>Список товаров</h1>
                    {products.length === 0
                        ? (<div className={s.grid}>
                            {[...Array(pageSize)].map((product, index) => <EmptyProduct key={index} />)}
                        </div>)
                        : (filteredProducts.length === 0
                            ? (<div className={s.product_list}>
                                <ErrorPage title='Нет товаров, удовлетворющих условиям поиска. Измените значения фильтров.' />
                            </div>)
                            : (<div className={s.grid}>
                                {filteredProducts.map(product => {
                                    return (
                                        <Link
                                            key={product.id}
                                            to={`/productpage?id=${product.id}`}
                                            style={{ textDecoration: 'none' }}>
                                            <ProductItem column
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
                            </div>)
                        )}
                    {filteredProducts.length !== 0 && <PaginatorContainer />}
                </div >
                {filteredProducts.length !== 0 && <Basket />}
            </div>
        );
    }
}

export default ProductList;