import React from 'react';
import s from './ProductItemHorizontal.module.css';
import cx from 'classnames';

const ProductItemHorizontal = ({ ratingComponent, img, isInStock, title, rating, maxRating, price, subPriceContent }) => {
    return (
        <div className={cx(s.product_item_horinzontal, { [s.product_item_horinzontal_none]: !isInStock })}>
            <img className={cx(s.img_product, { [s.img_product_none]: !isInStock })} src={img} alt="placeholder" />
            <div className={cx(s.is_in_stock, { [s.is_in_stock_none]: !isInStock })}>
                {isInStock ? 'В наличии' : 'Недоступен'}</div>
            <div className={s.title}>{title}</div>
            <div className={s.rating}>{[...Array(maxRating)].map((item, index) =>
                React.createElement(ratingComponent, { key: index, isFilled: (index + 1) <= rating }))}</div>
            <div className={s.prices}>
                <span className={s.price}>{price} &#8381;</span>
                <span className={s.subprice}>{subPriceContent} &#8381;</span>
            </div>
        </div>
    );
}

export default ProductItemHorizontal;