import React from 'react';
import productList from '../../products.json';
import ProductMainList from '../../components/ProductMainList/ProductMainList';

class ProductMainListContainer extends React.Component {
    constructor(props) {
        super(props);

        const { minValue, maxValue } = this.props;

        let productListPriceArray = [];
        productList.map(product => {
            return (product.price >= minValue && product.price <= maxValue) && productListPriceArray.push(product);
        });
        this.shortProductList = productListPriceArray.slice(0, 3);
    }

    render() {
        return (
            <div>
                <ProductMainList shortProductList={this.shortProductList} />
            </div>
        );
    }
}

export default ProductMainListContainer;