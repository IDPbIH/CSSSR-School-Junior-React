import React from 'react';
import { Link, Route } from 'react-router-dom';
import s from './Basket.module.css';

const Basket = ({ loading, save, error, basket, productsInBasket, clearBasket, sendBasket }) => {
    const totalProductCountInBasket = productsInBasket.length;

    const cartSumm = () => {
        const priceArr = productsInBasket.reduce((sum, product) => sum + product.price - product.price * product.discount / 100, 0);

        return priceArr.toLocaleString('ru') + ' ₽';
    }

    return (
        <div className={s.basket}>
            <div className={s.basket_top}>
                <svg className={s.basket_svg} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4733 5.00001L8.55329 0.62668C8.42663 0.440013 8.21329 0.34668 7.99996 0.34668C7.78663 0.34668 7.57329 0.440013 7.44663 0.633346L4.52663 5.00001H1.33329C0.966626 5.00001 0.666626 5.30001 0.666626 5.66668C0.666626 5.72668 0.673293 5.78668 0.693293 5.84668L2.38663 12.0267C2.53996 12.5867 3.05329 13 3.66663 13H12.3333C12.9466 13 13.46 12.5867 13.62 12.0267L15.3133 5.84668L15.3333 5.66668C15.3333 5.30001 15.0333 5.00001 14.6666 5.00001H11.4733ZM5.99996 5.00001L7.99996 2.06668L9.99996 5.00001H5.99996ZM6.66663 9.00001C6.66663 9.73335 7.26663 10.3333 7.99996 10.3333C8.73329 10.3333 9.33329 9.73335 9.33329 9.00001C9.33329 8.26668 8.73329 7.66668 7.99996 7.66668C7.26663 7.66668 6.66663 8.26668 6.66663 9.00001Z" fill="black" />
                </svg>
                <h3 className={s.title}>
                    Корзина
                </h3>
                {save &&
                    <svg className={s.save_svg} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99999 11.2001L1.79999 7.0001L0.399994 8.4001L5.99999 14.0001L18 2.0001L16.6 0.600098L5.99999 11.2001Z" fill="black" />
                    </svg>
                }
            </div>
            {error !== '' && <div className={s.error_message}>{error}</div>}
            {totalProductCountInBasket !== 0 && (
                <div className={s.basket_bottom}>
                    <div className={s.total_product_count}>
                        Товаров: {totalProductCountInBasket}
                    </div>
                    <div className={s.total_product_count_price}>
                        Всего: <span className={s.total_price}>{cartSumm()}</span>
                    </div>
                    <div>
                        <button
                            onClick={clearBasket}
                            className={loading ? s.clear_button + ' ' + s.lock : s.clear_button}
                            disabled={loading}
                        >
                            Очистить корзину
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => sendBasket(basket)}
                            className={loading ? s.save_button + ' ' + s.lock : s.save_button}
                            disabled={loading}
                        >
                            Сохранить корзину
                        </button>
                    </div>
                    <div>
                        <Route exact path="/productlist">
                            <Link to={'/basketpage'} style={{ textDecoration: 'none' }}>
                                <button className={s.to_basket_button} >Перейти в корзину</button>
                            </Link>
                        </Route>
                    </div>
                </div>
            )}
        </div >
    );
};

export default Basket;