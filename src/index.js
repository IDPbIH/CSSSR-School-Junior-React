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

    setInitialState = (reset) => {
        const ProductsJSONPriceArray = ProductsJSON.map(product => {
            return product.price;
        });

        return {
            url: null,
            minPriceValue: Math.min.apply(null, ProductsJSONPriceArray),
            maxPriceValue: Math.max.apply(null, ProductsJSONPriceArray),
            discountValue: 0,
            categories: this.categoriesFormation(),
            categoriesSelected: this.categoriesSelectedFormation(reset),
            products: this.getFilteredProducts(
                Math.min.apply(null, ProductsJSONPriceArray),
                Math.max.apply(null, ProductsJSONPriceArray),
                0,
                this.categoriesSelectedFormation(reset)
            )
        }
    }

    categoriesFormation = () => {
        return [...new Map(ProductsJSON.map(product => [`${product.category}:${product.categoryName}`, product])).values()];
    }

    categoriesSelectedFormation = (reset) => {
        if (reset === 'reset') {
            return []
        } else {
            return [...new Set(ProductsJSON
                .filter(product => window.location.href.includes(product.category))
                .map(product => { return product.category; })
            )];
        }
    }

    isPriceInMinMaxRange = (minValue, maxValue, price) => {
        return price >= minValue && price <= maxValue;
    }

    isDiscountWorking = (minPrice, maxPrice, discount) => {
        return minPrice <= (1 - discount / 100) * maxPrice;
    }

    isCategorySelected = (category, categoriesSelected) => {
        if (categoriesSelected.length === 0) return true
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
        let url = '';
        if (categoriesSelected.length === 0) {
            window.history.pushState(categoriesSelected, 'categories', '/');
        } else {
            for (var i = 0; i < categoriesSelected.length; i++) {
                i !== categoriesSelected.length - 1 ?
                    url = url + 'p' + i + '=' + categoriesSelected[i] + '&' :
                    url = url + 'p' + i + '=' + categoriesSelected[i]
            }
            window.history.pushState(categoriesSelected, 'categories', url);
        }
    }

    handleStateChange = (type, name, value) => {
        switch (type) {
            case 'input':
                this.setState({
                    [name]: Number(value)
                });
                break;
            case 'checkbox':
                if (this.state.categoriesSelected.includes(name)) {
                    this.setState({
                        categoriesSelected: this.state.categoriesSelected.filter(category => category !== name)
                    });
                } else {
                    this.setState({
                        categoriesSelected: [...this.state.categoriesSelected, name],
                    });
                }
                break;
            case 'reset':

                // this.setState({
                //     categoriesSelected: this.categoriesSelectedFormation('reset')
                // });
                this.setState((state) => { return state = this.setInitialState('reset') });
                break;
            default:
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
                        <div className='box2'><FilterList handleStateChange={this.handleStateChange} /></div>
                        <div className='box3'><ProductList /></div>
                    </StateContext.Provider>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);