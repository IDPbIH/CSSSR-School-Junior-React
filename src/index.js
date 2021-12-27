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

        // let categories;

        // if (window.location.pathname.substr(1) === '') {
        //     categories = 'products';
        // } else {
        //     category = window.location.pathname.substr(1);
        // }

        this.state = this.setInitialState();
    }

    setInitialState = () => {
        this.setURL(this.categoriesSelectedFormation());

        const ProductsJSONPriceArray = ProductsJSON.map(product => {
            return product.price;
        });

        return {
            minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
            maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
            discountValue: 0,
            categories: this.categoriesFormation(),
            categoriesSelected: this.categoriesSelectedFormation(),
            products: this.getFilteredProducts(
                Math.min.apply(null, ProductsJSONPriceArray),
                Math.max.apply(null, ProductsJSONPriceArray),
                0,
                this.categoriesSelectedFormation())
        }
    }

    categoriesFormation = () => {
        return [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()];
    }

    categoriesSelectedFormation = () => {
        return [...new Set(ProductsJSON.map(product => { return product.category; }))];
    }

    isPriceInMinMaxRange = (minValue, maxValue, price) => {
        return price >= minValue && price <= maxValue;
    }

    isDiscountWorking = (minPrice, maxPrice, discount) => {
        return minPrice <= (1 - discount / 100) * maxPrice;
    }

    isCategorySelected = (category, categoriesSelected) => {
        if (!this.state) return true
        else return categoriesSelected.includes(category);
    }

    getFilteredProducts = memoize((minValue, maxValue, discountValue, categoriesSelected) => {
        return (
            ProductsJSON.filter(product => (
                this.isPriceInMinMaxRange(minValue, maxValue, product.price)
                &&
                this.isDiscountWorking(product.price, product.subPriceContent, discountValue)
                &&
                this.isCategorySelected(product.category, categoriesSelected)
            ))
        );
    });

    setURL = (categoriesSelected) => {
        let url='';
        if (categoriesSelected.length !== 0) {
            for (var i = 0; i < categoriesSelected.length; i++) {
                i !== categoriesSelected.length - 1 ?
                    url = url + 'p' + i + '=' + categoriesSelected[i] + '&' :
                    url = url + 'p' + i + '=' + categoriesSelected[i]
            }
            window.history.pushState(categoriesSelected, 'categories', url);
        } else {
            window.history.pushState(categoriesSelected, 'categories','&');
        }
    }

    handleStateChange = (type, name, value) => {
        if (type === 'input') {
            this.setState({
                [name]: Number(value)
            });
        }
        if (type === 'checkbox') {
            if (this.state.categoriesSelected.includes(name)) {
                this.setState({
                    categoriesSelected: this.state.categoriesSelected.filter(category => category !== name)
                });
            } else {
                this.setState({
                    categoriesSelected: [...this.state.categoriesSelected, name],
                });
            }
        }
        this.setState((state) => ({
            products: this.getFilteredProducts(
                state.minPriceValue,
                state.maxPriceValue,
                state.discountValue,
                state.categoriesSelected)
        }), () => {
            this.setURL(this.state.categoriesSelected);
        });
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <StateContext.Provider value={this.state}>
                        <div className='box1'><ProductListHeader /></div>
                        <div className='box2'><FilterList handleStateChange={this.handleStateChange} setInitialState={this.setInitialState} /></div>
                        <div className='box3'><ProductList /></div>
                    </StateContext.Provider>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);