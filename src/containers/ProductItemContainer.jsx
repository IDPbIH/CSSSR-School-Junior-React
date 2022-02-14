import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem/ProductItem';
import { getBasket, setBasket } from '../store/basketReducer';
import { isProductInBasket } from '../utils/checks';

const ProductItemContainer = (props) => {
    const productInBasket = isProductInBasket(props.basket, props.id);

    return <ProductItem {...props} productInBasket={productInBasket} />;
}

const mapStateToProps = (state) => {
    return {
        basket: getBasket(state),
    };
};

export default connect(mapStateToProps, { setBasket })(ProductItemContainer);