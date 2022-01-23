import React from 'react';
import { connect } from 'react-redux';

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
        routing: state.routing // распаршенные данные о URL
    };
})(Route);