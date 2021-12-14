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

        const productListPriceArray = ProductsJSON.map(product => {
            return (product.price);
        });

        this.state = {
            minPriceValue: Math.min.apply(null, productListPriceArray),
            maxPriceValue: Math.max.apply(null, productListPriceArray),
            products: ProductsJSON
        };
        
        this.updateProducts(this.state.minPriceValue, this.state.maxPriceValue);
    }

    updateProducts = (minValue, maxValue) => {
        this.shortProductList=this.state.products.filter(product => (product.price >= minValue && product.price <= maxValue)).slice(0,3);
    }

    changeState = (newMinValue, newMaxValue) => {
        this.setState({
            minPriceValue: newMinValue,
            maxPriceValue: newMaxValue
        });
        this.updateProducts(newMinValue, newMaxValue);
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <div className='box1'><ProductMainHeader /></div>
                    <div className='box2'>
                        <PriceFilter
                            changeState={this.changeState}
                            minValue={this.state.minPriceValue}
                            maxValue={this.state.maxPriceValue}
                        />
                    </div>
                    <div className='box3'>
                        <ProductMainList shortProductList={this.shortProductList} />
                    </div>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);