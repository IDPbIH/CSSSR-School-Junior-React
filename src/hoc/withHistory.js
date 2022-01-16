import React from 'react';
import { store } from '../store';
import { setFromHistoryAC } from '../store/mainReducer';

export default function withHistory(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
     
            this.setFromHistoryTrigger = false;
        }

        setURL = (state) => {
            let url = '';
            if (state.mainPage.categoriesSelected.length === 0) {
                window.history.pushState(state, '', '/');
            } else {
                for (var i = 0; i < state.mainPage.categoriesSelected.length; i++) {
                    i !== state.mainPage.categoriesSelected.length - 1
                        ? url = url + 'p' + i + '=' + state.mainPage.categoriesSelected[i] + '&'
                        : url = url + 'p' + i + '=' + state.mainPage.categoriesSelected[i]
                }
                window.history.pushState(state, '', url);
            }
        }

        componentDidMount() {
            window.addEventListener('popstate', (event) => {
                this.setFromHistoryTrigger = true;
                store.dispatch(setFromHistoryAC(event.state));
            });
        }

        componentWillUnmount() {
            window.removeEventListener('popstate', (event) => {
                this.setFromHistoryTrigger = true;
                store.dispatch(setFromHistoryAC(event.state));
            });
        }

        componentDidUpdate() {
            !this.setFromHistoryTrigger && this.setURL(store.getState());
            this.setFromHistoryTrigger = false;
        }

        render() {
            return <InputComponent {...this.props}/>;
        }
    };
}