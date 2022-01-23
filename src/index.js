import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { connect, Provider } from 'react-redux';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductListContainer from './containers/ProductListContainer';
import FilterListContainer from './containers/FilterListContainer';
import PaginatorContainer from './containers/PaginatorContainer';
import Route from './components/Route/Route';
import { setMainFromHistoryAC } from './store/mainReducer';
import { setRoutingFromHistoryAC } from './store/routingReducer';

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.pathname);
    }

    componentDidMount() {
        window.addEventListener('popstate', (event) => {
            this.props.setMainFromHistoryAC(event.state);
            this.props.setRoutingFromHistoryAC(event.state);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', (event) => {
            this.props.setMainFromHistoryAC(event.state);
            this.props.setRoutingFromHistoryAC(event.state);
        });
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <div className='box1'><ProductListHeader /></div>
                    <div className='box2'><FilterListContainer /></div>
                    <div className='box3'><Route path='/products'><ProductListContainer /></Route></div>
                    <div className='box4'><Route path='/products'><PaginatorContainer /></Route></div>
                </div>
            </main >
        );
    }
}

const AppContainer = connect(null, {setMainFromHistoryAC, setRoutingFromHistoryAC})(App);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , rootElement);