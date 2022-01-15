import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import { StateContext } from '../index';

const ProductListContainer = () => {
    const stateContext = React.useContext(StateContext);
    
    return (
        <ProductList mainPage={stateContext.mainPage} />
    );
}

export default ProductListContainer;