import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductListContainer from './containers/ProductListContainer';
import FilterListContainer from './containers/FilterListContainer';
import PaginatorContainer from './containers/PaginatorContainer';
import Route from './components/Route/Route';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    render() {

        return (
            <main>
                <div className='products_main'>
                    <div className='box1'><ProductListHeader /></div>
                    <div className='box2'><FilterListContainer /></div>
                    <div className='box3'><Route path='/productlist'><ProductListContainer /></Route></div>
                    <div className='box4'><Route path='/productlist'><PaginatorContainer /></Route></div>
                </div>
            </main >
        );
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);