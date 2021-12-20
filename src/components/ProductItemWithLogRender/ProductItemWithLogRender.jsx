import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';
import withLogRender from '../../hoc/withLogRender';
import ProductItem from 'csssr-school-product-card';

class ProductItemWithLogRender extends LogRender {
    render() {
        return (
            <ProductItem {...this.props}/>
        );
    }
}
export default withLogRender(ProductItemWithLogRender);