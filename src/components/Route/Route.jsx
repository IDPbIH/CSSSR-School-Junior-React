import React from 'react';
import { connect } from 'react-redux';
import { getRoutingState } from '../../store/routingReducer';

class Route extends React.Component {
    render() {
        const path = this.props.routing.path;
        if (path !== this.props.path) {
            return null
        }
        return React.Children.only(this.props.children);
    }
}

export default connect(state => {
    return {
        routing: getRoutingState(state)
    };
})(Route);