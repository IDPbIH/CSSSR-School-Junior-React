import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsMainH1 from './components/ProductsMainH1/ProductsMainH1';
import ProductsMainTable from './components/ProductsMainTable/ProductsMainTable';

function App() {
    return (
        <main>
            <div className='products-main'>
                <ProductsMainH1 />
                <ProductsMainTable />
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);