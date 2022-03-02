import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem/ProductItem';
import { getIDProductsInBasket, getLoading } from '../store/basket/selectors';
import { setBasket } from '../store/basket/actions';
import { isProductInBasket } from '../utils/checks';

const ProductItemContainer = (props) => {
    const productInBasket = isProductInBasket(props.basket, props.id);

    return <ProductItem {...props} productInBasket={productInBasket} />;
}

const mapStateToProps = (state) => {
    return {
        loading: getLoading(state),
        basket: getIDProductsInBasket(state)
    };
};

export default connect(mapStateToProps, { setBasket })(ProductItemContainer);