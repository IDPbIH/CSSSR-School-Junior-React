import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductMainHeader from './components/ProductMainHeader/ProductMainHeader';
import ProductMainListContainer from './containers/ProductMainListContainer/ProductMainListContainer';
import PriceFilter from './components/PriceFilter/PriceFilter';

function App() {
    return (
        <main>
            <div className='products_main'>
                <div className='box1'><ProductMainHeader /></div>
                <div className='box2'><PriceFilter /></div>
                <div className='box3'><ProductMainListContainer
                                            minValue={150}
                                            maxValue={200} />
                </div>
            </div>
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);