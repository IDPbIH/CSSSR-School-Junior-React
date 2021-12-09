import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import productsList from './products.json';

function App() {
    return (
        <main>
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
        </main>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);