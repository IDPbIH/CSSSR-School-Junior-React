import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsJSON from './products.json';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainList from './components/ProductMainList/ProductMainList';
import Filters from './components/Filters/Filters';

const memoize = (fn) => {
    const prevCall = {
        args: []
    }
    return function (...args) {
        let equal = true
        args.forEach((el, index) => {
            equal = equal && prevCall.args[index] === el
        })
        if (!equal) {
            prevCall.args = args
            prevCall.result = fn(...args)
        }
        return prevCall.result
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        const ProductsJSONPriceArray = ProductsJSON.map(product => {
            return product.price;
        });

        this.state = {
            minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
            maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
            discountValue: 0,
            products: ProductsJSON
        };
    }

    isPriceInMinMaxRange = (minValue, maxValue, price) => {
        return price >= minValue && price <= maxValue;
    }

    isDiscountWorking = (minPrice, maxPrice, discount) => {
        return (minPrice) <= (1 - discount / 100) * maxPrice;
    }

    // getFilteredProducts = (minValue, maxValue, discountValue) => {
    //     return (ProductsJSON.filter(product => (
    //         this.isPriceInMinMaxRange(minValue, maxValue, product.price) &&
    //         this.isDiscountWorking(product.price, product.subPriceContent, discountValue)
    //     )));
    // }

    getFilteredProducts = memoize((minValue, maxValue, discountValue) => {
        return (ProductsJSON.filter(product => (
            this.isPriceInMinMaxRange(minValue, maxValue, product.price)
            &&
            this.isDiscountWorking(product.price, product.subPriceContent, discountValue))
        ));
    });

    handleSubmit = (value, name) => {
        switch (name) {
            case 'minValueInput':
                return (
                    this.setState({
                        minPriceValue: Number(value),
                        products: this.getFilteredProducts(value, this.state.maxPriceValue, this.state.discountValue)
                    })
                );
            case 'maxValueInput':
                return (
                    this.setState({
                        maxPriceValue: Number(value),
                        products: this.getFilteredProducts(this.state.minPriceValue, value, this.state.discountValue)
                    })
                );
            case 'discountInput':
                return (
                    this.setState({
                        discountValue: Number(value),
                        products: this.getFilteredProducts(this.state.minPriceValue, this.state.maxPriceValue, value)
                    })
                );
            default:
                console.log('input error');
        }
    }

    renderChildren = memoize(() => <ProductMainHeader />)

    render() {
        

        return (
            <main>
                <div className='products_main'>
                    {/* <div className='box1'><ProductMainHeader /></div> */}
                    {this.renderChildren}
                    <div className='box2'>
                        <Filters
                            handleSubmit={this.handleSubmit}
                            minValue={this.state.minPriceValue}
                            maxValue={this.state.maxPriceValue}
                            discountValue={this.state.discountValue}
                        />
                    </div>
                    <div className='box3'>
                        {/* {this.renderInputNumber} */}
                        <ProductMainList shortProductList={this.state.products} />
                    </div>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);