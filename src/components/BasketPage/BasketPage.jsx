import React from 'react';
import BasketContainer from '../../containers/BasketContainer';
import BackButton from '../BackButton/BackButton';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProductList from '../ProductList/ProductList';
import s from './BasketPage.module.css';

const BasketPage = ({ productsInBasket }) => {
    return (
        <div className={s.basket_page}>
            <div className={s.product_list}>
                <h1 className={s.title}><BackButton />Корзина</h1>
                <div className={s.product_list}>
                    {productsInBasket.length === 0
                        ? (<div className={s.product_list}>
                            <ErrorPage title='Добавьте товары в корзину для их отображения' />
                        </div>)
                        : (<ProductList products={productsInBasket} />)
                    }
                </div>
            </div>
            <BasketContainer />
        </div >
    );
};

export default BasketPage;