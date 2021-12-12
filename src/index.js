import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainLIst from './components/ProductMainLIst/ProductMainLIst';

function App() {
    return (
        <main>
            <div className='products-main'>
                <ProductMainHeader />
                <ProductMainLIst />
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);