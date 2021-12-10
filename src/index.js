import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import productsList from './products.json';

class ProductsMainH1 extends React.Component {
    render() {
        return <h1 className='products-main-h1'>Список товаров</h1>;
    }
}

class ProductsMainUL extends React.Component {
    render() {
        return <ul className='products-main-ul'>
            {productsList.map(
                function callback(p) {
                    return p.id < 4 && <li key={p.id}>{p.name}</li>
                }
            )}
        </ul>;
    }
}

function App() {
    return (
        <main>
            <div className='products-main'>
                <ProductsMainH1 />
                <ProductsMainUL />
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);