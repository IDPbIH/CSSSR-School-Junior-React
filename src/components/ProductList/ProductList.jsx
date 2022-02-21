import React from 'react';
import s from './ProductList.module.css';
import LogRender from '../../components/LogRender/LogRender';
import ProductItemContainer from '../../containers/ProductItemContainer';
import RatingComponent from '../RatingComponent/RatingComponent';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import FilterListContainer from '../../containers/FilterListContainer';
import { EmptyProduct } from '../EmptyProduct/EmptyProduct';
import BasketContainer from '../../containers/BasketContainer';

class ProductList extends LogRender {
    render() {
        const { products, filteredProducts, pageSize } = this.props;

        return (
            <div className={s.product_list_with_filters}>
                {products.length !== 0 && <FilterListContainer />}
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
                                        <ProductItemContainer column
                                            id={product.id}
                                            name={product.name}
                                            img={product.img}
                                            price={product.price}
                                            discount={product.discount}
                                            stars={product.stars}
                                            status={product.status}
                                            ratingComponent={RatingComponent}
                                            key={product.id}
                                        />
                                    );
                                })}
                            </div>)
                        )}
                    {filteredProducts.length !== 0 && <PaginatorContainer />}
                </div >
                {products.length !== 0 && <BasketContainer />}
            </div>
        );
    }
}

export default ProductList;