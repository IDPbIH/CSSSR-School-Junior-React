import React from 'react';
import BasketContainer from '../../containers/BasketContainer';
import BackButton from '../BackButton/BackButton';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProductList from '../ProductList/ProductList';
import s from './BasketPage.module.css';

const BasketPage = ({ products, basket }) => {
    return (
        <div className={s.basket_page}>
            <div className={s.product_list}>
                <h1 className={s.title}><BackButton />Корзина</h1>
                <div className={s.product_list}>
                    {basket.length === 0
                        ? (<div className={s.product_list}>
                            <ErrorPage title='Добавьте товары в корзину для их отображения' />
                        </div>)
                        : (<ProductList products={products.filter(product => basket.includes(product.id))} />)
                    }
                </div>
            </div>
            <BasketContainer />
        </div >
    );
};

export default BasketPage;