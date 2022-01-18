import React from 'react';
import { store } from '../store';

export default function withHistory(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
     
            this.setFromHistoryTrigger = false;
        }

        setURL = (dataURL) => {
            let url = '?';
            if (dataURL.length === 0) {
                window.history.pushState(store.getState(), '', '/');
            } else {
                for (var i = 0; i < dataURL.length; i++) {
                    i !== dataURL.length - 1
                        ? url = url + 'p' + i + '=' + dataURL[i] + '&'
                        : url = url + 'p' + i + '=' + dataURL[i]
                }
                window.history.pushState(store.getState(), '', url);
            }
        }

        componentDidMount() {
            window.addEventListener('popstate', (event) => {
                this.setFromHistoryTrigger = true;
                this.props.setFromHistoryAC(event.state);
            });
        }

        componentWillUnmount() {
            window.removeEventListener('popstate', (event) => {
                this.setFromHistoryTrigger = true;
                this.props.setFromHistoryAC(event.state);
            });
        }

        componentDidUpdate() {
            !this.setFromHistoryTrigger && this.setURL(this.props.dataForURL);
            this.setFromHistoryTrigger = false;
        }

        render() {
            return <InputComponent {...this.props}/>;
        }
    };
}