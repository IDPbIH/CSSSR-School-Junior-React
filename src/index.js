import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainList from './components/ProductMainList/ProductMainList';

function App() {
    return (
        <main>
            <div className='products-main'>
                <ProductMainHeader />
                <ProductMainList />
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);