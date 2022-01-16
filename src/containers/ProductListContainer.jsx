import {connect} from 'react-redux';
import ProductList from '../components/ProductList/ProductList';

const mapStateToProps = (state) => {
    return {
        products: state.mainPage.products
    };
};

const ProductListContainer = connect(mapStateToProps)(ProductList);

export default ProductListContainer;