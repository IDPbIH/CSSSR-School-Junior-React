import React from 'react';
import s from './App.module.css';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductListContainer from './containers/ProductListContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import { store } from './store';
import { getMessage, getResult, getLoading, setError, setProductsFromAPI } from './store/mainReducer';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }

    componentDidMount() {
        fetch('https://course-api.school.csssr.com/products')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так ...');
                }
            })
            .then(result => store.dispatch(setProductsFromAPI(result.products)))
            .catch(e => store.dispatch(setError('Товары не найдены')))
    }

    render() {
        const { result, message, loading } = this.props;
        
        return (
            <main className={s.main}>
                {loading
                    ? (<div className={s.loading}>Loading...</div>)
                    : result === 'ERROR'
                        ? (<ErrorPage title={message} />)
                        : (<Switch>
                            <Route exact path='/' ><Redirect to='/productlist' /></Route>
                            <Route path='/productlist' ><ProductListContainer /></Route>
                            <Route path='/productpage' ><ProductPageContainer /></Route>
                        </Switch >)}
            </main >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: getResult(state),
        message: getMessage(state),
        loading: getLoading(state)
    };
};

export default connect(mapStateToProps)(App);