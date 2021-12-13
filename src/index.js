import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainList from './components/ProductMainList/ProductMainList';
import PriceFilter from './components/PriceFilter/PriceFilter';

function App() {
    return (
        <main>
            <div className='products_main'>
                <div className='box1'><ProductMainHeader /></div>
                <div className='box2'><PriceFilter /></div>
                <div className='box3'><ProductMainList /></div>
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);