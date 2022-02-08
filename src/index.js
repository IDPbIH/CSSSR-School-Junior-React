import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ProductListContainer from './containers/ProductListContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './store';
import { setProductsFromAPI } from './store/mainReducer';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    componentDidMount() {
        fetch('https://course-api.school.csssr.com/products1')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так ...');
                }
            })
            .then(result => store.dispatch(setProductsFromAPI(result.products)))
            .catch(e => { 
                // ответ, отличный от HTTP 200 Failed to fetch
                console.log(e.message);
            })
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