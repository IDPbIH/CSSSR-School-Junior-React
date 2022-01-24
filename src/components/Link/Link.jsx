import React from 'react';
import { connect } from 'react-redux';
import { setActivePage, setActiveCategories } from '../../store/routingReducer';
import setURL from '../../utils/setURL';

class Link extends React.Component {
    handleLinkClick = (event) => {
        event.preventDefault();;
        switch (this.props.type) {
            case 'page':
                this.props.setActivePage(this.props.value);
                break;
            case 'category':
                this.props.setActiveCategories(this.props.value);
                break;
            default:
        }
        setURL(this.props.type, this.props.value);
    }

    render() {
        return (
            <a href={this.props.href} onClick={this.handleLinkClick}>
                {this.props.children}
            </a>
        );
    }
}

export default connect(null, { setActivePage, setActiveCategories })(Link);