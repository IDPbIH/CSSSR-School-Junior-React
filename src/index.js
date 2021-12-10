import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsMainH1 from './components/ProductsMainH1/ProductsMainH1';
import ProductsMainUL from './components/ProductsMainUL/ProductsMainUL';

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