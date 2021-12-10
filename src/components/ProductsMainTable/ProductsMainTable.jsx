import React from 'react';
import style from './ProductsMainTable.module.css';
import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && style.starFill} />;
};

const ProductsMainTable = props => {
    return <div className={style.wrapper}>
        <ProductItem
            isInStock={true}
            img={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/420px-Mercury_in_color_-_Prockter07_centered.jpg'}
            title="Земля"
            price="3,33022"
            subPriceContent="⋅10 23"
            maxRating={5}
            rating={1}
            ratingComponent={ratingComponent}
        />

        <ProductItem
            isInStock={true}
            img={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Venus_from_Mariner_10.jpg/420px-Venus_from_Mariner_10.jpg'}
            title="Венера"
            price="4,8675"
            subPriceContent="⋅10 24"
            maxRating={5}
            rating={2}
            ratingComponent={ratingComponent}
        />

        <ProductItem
            isInStock={false}
            img={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png/405px-Africa_and_Europe_from_a_Million_Miles_Away.png'}
            title="Земля"
            price="5,9726"
            subPriceContent="⋅10 24"
            maxRating={5}
            rating={3}
            ratingComponent={ratingComponent}
        />

        <ProductItem
            isInStock={true}
            img={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/411px-Mars_Valles_Marineris_EDIT.jpg'}
            title="Марс"
            price="6,4171"
            subPriceContent="⋅10 23"
            maxRating={5}
            rating={2}
            ratingComponent={ratingComponent}
        />
    </div >;
}

export default ProductsMainTable;