import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ProductListContainer from './containers/ProductListContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './store';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    render() {
        return (
            <main className='main'>
                <Switch>
                    <Route exact path='/' ><Redirect to='/productlist' /></Route>
                    <Route path='/productlist' ><ProductListContainer /></Route>
                    <Route path='/productpage' ><ProductPageContainer /></Route>
                </Switch >
            </main >
        );
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , rootElement);