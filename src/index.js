import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import productsList from './products.json';

function App() {
    return (
        <div className="products-main">
            <h1>Список товаров</h1>
            <ul>
                {productsList.map(p => p.id < 4 && <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);