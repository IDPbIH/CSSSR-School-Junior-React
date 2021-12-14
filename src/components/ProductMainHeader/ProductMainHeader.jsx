import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';

class ProductMainHeader extends LogRender {
    render () {
        return (
            <h1 className='products-main-h1'>Список товаров</h1>
        );
    }
}

export default ProductMainHeader;