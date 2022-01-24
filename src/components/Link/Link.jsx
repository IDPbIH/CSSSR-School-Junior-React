import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import { setActivePage, setActiveCategories } from '../../store/routingReducer';

class Link extends React.Component {
//     setURL = ({ type, name, value, href }) => {
//         let url = '?';
//         switch (type) {
//             case 'category':
//                 return {
//                     for(var i = 0; i<dataURL.length; i++) {
//                     i !== dataURL.length - 1
//                         ? url = url + 'p' + i + '=' + dataURL[i] + '&'
//                         : url = url + 'p' + i + '=' + dataURL[i]
//                 }
//                 window.history.pushState(store.getState(), '', url);
//                 this.props.selectCategoryAC(value)
//         };
//             case 'page':
//         return this.props.setCurrentPageAC(value);
//             default:
//         }

// if (dataURL.length === 0) {
//     window.history.pushState(store.getState(), '', '/');
// } else {

// }
//     };

setURL = (query) => {

}

handleLinkClick = (event) => {
    event.preventDefault();
    // this.props.setActivePage();
    this.props.setActiveCategories(this.props.value);
    
}

render() {
    return (
        <a href={this.props.href} onClick={this.handleLinkClick}>
            {this.props.children}
        </a>
    );
}
}

const mapStateToProps = (state) => {
    return {
        routing: state.routing.query
    };
};

export default connect(mapStateToProps, { setActivePage, setActiveCategories })(Link);