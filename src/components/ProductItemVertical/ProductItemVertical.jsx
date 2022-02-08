import React from 'react';
import s from './ProductItemVertical.module.css';
import cx from 'classnames';

const ProductItemVertical = ({ name, img, price, discount, stars, status, ratingComponent }) => {
    const priceWithDiscount = price - price * discount / 100;
    const maxStars = 5;

    return (
        <div className={cx(s.product_item_vertical, { [s.product_item_vertical_none]: status === 'OUT_STOCK' })}>
            <div className={cx(s.is_in_stock, { [s.is_in_stock_none]: status === 'OUT_STOCK' })}>
                {status === 'IN_STOCK' ? 'В наличии' : 'Недоступен'}
            </div>
            <img className={cx(s.img_product, { [s.img_product_none]: status === 'OUT_STOCK' })} src={img} alt="placeholder" />
            <div className={s.name}>{name}</div>
            <div className={s.rating}>
                {[...Array(maxStars)].map((item, index) =>
                    React.createElement(ratingComponent, { key: index, isFilled: (index + 1) <= stars }))}
            </div>
            <div className={s.prices}>
                <span className={s.price_with_discount}>{priceWithDiscount} &#8381; </span>
                <span className={s.price}>{price} &#8381;</span>
            </div>
        </div>
    );
}

export default ProductItemVertical;