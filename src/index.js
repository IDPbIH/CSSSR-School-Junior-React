import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    return (
        <div className="products-main">
            <h1>Список товаров</h1>
            <ul>
                <li>Имя товара1</li>
                <li>Имя товара2</li>
                <li>Имя товара3</li>
            </ul>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);