import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductListHeader from './components/ProductListHeader/ProductListHeader';
import ProductListContainer from './containers/ProductListContainer';
import FilterListContainer from './containers/FilterListContainer';
import { store } from './store';
import setURL from './utils/setURL';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        window.history.replaceState(store.getState(), '', window.location.pathname);
    }

    componentDidMount() {
        window.addEventListener('popstate', (event) => { reRender(event.state) });
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', (event) => { reRender(event.state) });
    }

    render() {
        return (
            <main>
                <div className='products_main'>
                    <StateContext.Provider value={this.props.state}>
                        <DispatchContext.Provider value={this.props.dispatch}>
                            <div className='box1'><ProductListHeader /></div>
                            <div className='box2'><FilterListContainer /></div>
                            <div className='box3'><ProductListContainer /></div>
                        </DispatchContext.Provider>
                    </StateContext.Provider>
                </div>
            </main>
        );
    }
}

let reRender = (state) => {
    const rootElement = document.getElementById('root');
    ReactDOM.render(<App state={state} dispatch={store.dispatch} />, rootElement);
};
reRender(store.getState());
store.subscribe(() => {
    setURL(store.getState());
    reRender(store.getState());
});