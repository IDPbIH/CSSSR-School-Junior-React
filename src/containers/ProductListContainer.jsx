import React from 'react';
import styles from '../components/ProductList/ProductList.module.css';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import withHistory from '../hoc/withHistory';
import { getFilteredProductsWithPagination } from '../store/mainReducer';
import { setStateFromHistory } from '../store';
import ProductListHeader from '../components/ProductListHeader/ProductListHeader';
import PaginatorContainer from './PaginatorContainer';

class ProductListContainer extends React.PureComponent {
    render() {
        const { filteredProducts } = this.props;

        if (!filteredProducts.length) {
            return (
                <div className={styles.productListContainer}>
                    <h2>Нет товаров, удовлетворющих условиям поиска.</h2>
                    <h2>Измените значения фильтров.</h2>
                </div>
            );
        } else {
            return (
                <div className={styles.productListContainer}>
                    <ProductListHeader />
                    <ProductList {...this.props} />
                    <PaginatorContainer />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProductsWithPagination(state)
    };
};

export default connect(mapStateToProps, { setStateFromHistory })(withHistory(ProductListContainer));