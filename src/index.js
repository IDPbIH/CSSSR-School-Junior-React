import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsJSON from './products.json';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainList from './components/ProductMainList/ProductMainList';
import PriceFilter from './components/PriceFilter/PriceFilter';

class App extends React.Component {
    constructor(props) {
        super(props);

        const ProductsJSONPriceArray = ProductsJSON.map(product => {
            return product.price;
        });

        this.state = {
            minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
            maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
            products: ProductsJSON
        };

    }

    getFilteredProducts = (minValue, maxValue) => {
        return (ProductsJSON.filter(product => (product.price >= minValue && product.price <= maxValue)));
    }

    handleSubmit = (value, title) => {
        switch (title) {
            case 'minValueInput':
                return (
                    this.setState({
                        minPriceValue: value,
                        products: this.getFilteredProducts(value, this.state.maxPriceValue)
                    })
                );
            case 'maxValueInput':
                return (
                    this.setState({
                        maxPriceValue: value,
                        products: this.getFilteredProducts(this.state.maxPriceValue, value)
                    })
                );
            default:
                console.log('input error');
        }
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <div className='box1'><ProductMainHeader /></div>
                    <div className='box2'>
                        <PriceFilter
                            handleSubmit={this.handleSubmit}
                            minValue={this.state.minPriceValue}
                            maxValue={this.state.maxPriceValue}
                        />
                    </div>
                    <div className='box3'>
                        <ProductMainList shortProductList={this.state.products} />
                    </div>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);