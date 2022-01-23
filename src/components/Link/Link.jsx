import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import { pushStateAC, setCurrentPageAC } from '../../store/routingReducer';

class Link extends React.Component {
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
    
    render() {
        return (
            <a href={this.props.href} onClick={this.handleLinkClick}>
                {this.props.children}
            </a>
        );
    }

    handleLinkClick = (event) => {
        event.preventDefault();
        window.history.pushState(store.getState(), event.target.name, this.props.href);
        // this.props.pushStateAC(this.props.href);
        this.props.setCurrentPageAC(event.target.value);
    }
}

export default connect(null, { pushStateAC, setCurrentPageAC })(Link);