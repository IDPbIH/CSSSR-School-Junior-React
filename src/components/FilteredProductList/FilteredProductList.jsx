import React from 'react';
import s from './FilteredProductList.module.css';
import LogRender from '../LogRender/LogRender';
import PaginatorContainer from '../../containers/PaginatorContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import FilterListContainer from '../../containers/FilterListContainer';
import { EmptyProduct } from '../EmptyProduct/EmptyProduct';
import BasketContainer from '../../containers/BasketContainer';
import ProductList from '../ProductList/ProductList';

class FilteredProductList extends LogRender {
    render() {
        const { products, filteredProducts, pageSize } = this.props;
        const productList =
            filteredProducts.length === 0
                ? <div className={s.product_list}>
                    <ErrorPage title='Нет товаров, удовлетворющих условиям поиска. Измените значения фильтров.' />
                </div>
                : <ProductList products={filteredProducts} />
        const emptyProductList =
            <div className={s.grid}>
                {[...Array(pageSize)].map((product, index) => <EmptyProduct key={index} />)}
            </div>

        return (
            <div className={s.product_list_with_other}>
                {products.length !== 0 && <FilterListContainer />}
                <div className={s.product_list}>
                    <h1 className={s.title}>Список товаров</h1>
                    {products.length !== 0
                        ? productList
                        : emptyProductList}
                    {filteredProducts.length !== 0 && <PaginatorContainer />}
                </div >
                {products.length !== 0 && <BasketContainer />}
            </div>
        );
    }
}

export default FilteredProductList;