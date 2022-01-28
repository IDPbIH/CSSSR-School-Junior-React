import React from 'react';
import s from './ProductItemHorizontal.module.css';
import RatingComponent from '../RatingComponent/RatingComponent';

// function ProductItem(_ref) {
//    
//     return _react.default.createElement("div", {
//       className: (0, _classnames.default)(_indexModule.default.goods, _defineProperty({}, _indexModule.default.goodsNone, !isInStock))
//     }, _react.default.createElement("div", {
//       className: (0, _classnames.default)(_indexModule.default.goodsType, _defineProperty({}, _indexModule.default.goodsTypeNone, !isInStock))
//     }, isInStock ? "В наличии" : "Недоступен"),

const ProductItemHorizontal = ({ img, isInStock, title, rating, maxRating, price, subPriceContent }) => {
    return (
        <div className={s.product_item_horinzontal}>
            <img src={img} alt="placeholder"></img>
            <div>{title}</div>
            <div>{[...Array(maxRating)].map((item, index) => <RatingComponent isFilled={(index + 1) <= rating} />)}</div>
            <div>{price + ' ' + subPriceContent}</div>
        </div>
    );
}

export default ProductItemHorizontal;