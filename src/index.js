import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Route from './components/Route/Route';
import ProductListContainer from './containers/ProductListContainer';
import FilterListContainer from './containers/FilterListContainer';
import ProductPage from './components/ProductPage/ProductPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    render() {
        return (
            <main className='main'>
                    {/* <Route path='/productlist'><FilterListContainer /></Route> */}
                    {/* <Route path='/productlist'><ProductListContainer /></Route> */}
                    <Route path='/productlist'><ProductPage /></Route>
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