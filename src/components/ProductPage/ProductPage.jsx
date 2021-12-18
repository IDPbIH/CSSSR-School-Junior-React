import React from 'react';

class ProductPage extends React.PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default ProductPage;