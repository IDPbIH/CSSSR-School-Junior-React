import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductListContainer from './containers/ProductListContainer';
import FilterListContainer from './containers/FilterListContainer';
import { store } from './store';
import { Provider } from 'react-redux';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        
        window.history.replaceState(store.getState(), '', window.location.pathname);
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <div className='box1'><ProductListHeader /></div>
                    <div className='box2'><FilterListContainer /></div>
                    <div className='box3'><ProductListContainer /></div>
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