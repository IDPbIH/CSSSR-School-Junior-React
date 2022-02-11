import React from 'react';
import s from './App.module.css';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductListContainer from './containers/ProductListContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import { store } from './store';
import { getMessage, getResult, getLoading, getDataFromAPI } from './store/mainReducer';

class App extends React.Component {
    constructor(props) {
        super(props);

        window.history.replaceState(store.getState(), '', window.location.search);
    }
    
    componentDidMount() {
        this.props.getDataFromAPI();
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

export default connect(mapStateToProps, {getDataFromAPI})(App);