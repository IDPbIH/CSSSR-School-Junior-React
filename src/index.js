import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import ProductListContainer from './containers/ProductListContainer';
import ProductPage from './components/ProductPage/ProductPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    render() {
        return (
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Navigate to="productlist" />} />
                    <Route path='productlist' element={<ProductListContainer />} />
                    <Route path='productpage' element={<ProductPage />} />
                </Routes>
            </main >
        );
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , rootElement);