import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsJSON from './products.json';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductList from './components/ProductList/ProductList';
import FilterList from './components/FilterList/FilterList';
import memoize from './utils/memoize';

export const StateContext = React.createContext(null);



class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = this.setInitialState();
    }
    
    setInitialState = () => {
        const ProductsJSONPriceArray = ProductsJSON.map(product => {
            return product.price;
        });

        return {
            minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
            maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
            discountValue: 0,
            category: 'Продукты',
            products: this.getFilteredProducts(Math.min.apply(null, ProductsJSONPriceArray), Math.max.apply(null, ProductsJSONPriceArray), 0, 'Продукты')
        };
    }

    isPriceInMinMaxRange = (minValue, maxValue, price) => {
        return price >= minValue && price <= maxValue;
    }

    isDiscountWorking = (minPrice, maxPrice, discount) => {
        return (minPrice) <= (1 - discount / 100) * maxPrice;
    }

    getFilteredProducts = memoize((minValue, maxValue, discountValue, category) => {
        return (
            ProductsJSON.filter(product => (
                this.isPriceInMinMaxRange(minValue, maxValue, product.price,)
                &&
                this.isDiscountWorking(product.price, product.subPriceContent, discountValue)
                &&
                product.category === category
            ))
        );
    });

    handleStateChange = (type, e) => {
        if (type === 'input') {
            this.setState({ [e.target.name]: Number(e.target.value) });
        } else {
            this.setState({ category: e.target.name });
        }
        this.setState((state) => { state.products = this.getFilteredProducts(state.minPriceValue, state.maxPriceValue, state.discountValue, state.category) });
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <StateContext.Provider value={this.state}>
                        <div className='box1'><ProductListHeader /></div>
                        <div className='box2'><FilterList handleStateChange={this.handleStateChange} setInitialState={this.setInitialState}/></div>
                        <div className='box3'><ProductList /></div>
                    </StateContext.Provider>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);