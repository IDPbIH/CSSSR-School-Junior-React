import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem/ProductItem';
import { getBasket, getLoading, setBasket } from '../store/basketReducer';
import { isProductInBasket } from '../utils/checks';

const ProductItemContainer = (props) => {
    const productInBasket = isProductInBasket(props.basket, props.id);

    return <ProductItem {...props} productInBasket={productInBasket} />;
}

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        basket: getBasket(state)
    };
};

export default connect(mapStateToProps, { setBasket })(ProductItemContainer);