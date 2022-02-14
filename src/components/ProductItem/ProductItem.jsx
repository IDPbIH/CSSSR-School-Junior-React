import React from 'react';
import s from './ProductItem.module.css';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const ProductItem = ({ row, column, id, name, img, price, discount, stars, status, ratingComponent, productInBasket, setBasket }) => {
    const priceWithDiscount = price - price * discount / 100;
    const maxStars = 5;

    return (
        <div className={cx(s.product_item,
            { [s.row_item]: row }, { [s.column_item]: column },
            { [s.product_item_none]: status === 'OUT_STOCK' })}>
            <div className={cx(s.is_in_stock, { [s.is_in_stock_none]: status === 'OUT_STOCK' })}>
                {status === 'IN_STOCK' ? 'В наличии' : 'Недоступен'}
            </div>
            <Link to={`/productpage?id=${id}`} style={{ textDecoration: 'none' }}>
                <img className={cx(s.img_product, { [s.img_product_none]: status === 'OUT_STOCK' })} src={img} alt="placeholder" />
            </Link>
            <div className={row ? s.row_info : s.column_info}>
                <div className={s.name}>{name}</div>
                <div className={s.rating}>
                    {[...Array(maxStars)].map((item, index) =>
                        React.createElement(ratingComponent, { key: index, isFilled: (index + 1) <= stars }))}
                </div>
                <div>
                    <span className={s.price_with_discount}>{priceWithDiscount} &#8381; </span>
                    <span className={s.price}>{price} &#8381;</span>
                </div>
                <div>
                    <Link to={window.location.search} onClick={() => setBasket(id)}>
                        <button className={s.addRemove_button} >{productInBasket ? 'Убрать из корзины' : 'Добавить в корзину'}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;