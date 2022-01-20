import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import { getFilteredProducts } from '../store/mainReducer';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProducts(state)
    };
};

const ProductListContainer = connect(mapStateToProps, null)(ProductList);

export default ProductListContainer;