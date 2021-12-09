import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import productsList from './products.json';

function Main() {
    return (
        <div className="products-main">
            <h1>Список товаров</h1>
            <ul>
                {productsList.map(
                    function callback(p) {
                        return p.id < 4 && <li key={p.id}>{p.name}</li>
                    }
                )}
            </ul>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);