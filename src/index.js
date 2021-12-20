import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsJSON from './products.json';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductList from './components/ProductList/ProductList';
import FilterPage from './components/FilterPage/FilterPage';
import ProductPage from './components/ProductPage/ProductPage';

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

class App extends React.PureComponent {
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

    getFilteredProducts = memoize((minValue, maxValue, discountValue) => {
        return (
            ProductsJSON.filter(product => (
                this.isPriceInMinMaxRange(minValue, maxValue, product.price)
                &&
                this.isDiscountWorking(product.price, product.subPriceContent, discountValue)
            ))
        );
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

    renderProductMainHeader = memoize(() => <ProductListHeader />)
    renderProductList = memoize((stateProductList) => <ProductList shortProductList={stateProductList} />)

    render() {
        return (
            <main>
                <ProductPage>
                    <div className='products_main'>
                        <div className='box1'>{this.renderProductMainHeader(1)}</div>
                        <div className='box2'>
                            <FilterPage
                                handleSubmit={this.handleSubmit}
                                minValue={this.state.minPriceValue}
                                maxValue={this.state.maxPriceValue}
                                discountValue={this.state.discountValue}
                            />
                        </div>
                        <div className='box3'>
                            {this.renderProductList(this.state.products)}
                        </div>
                    </div>
                </ProductPage>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);