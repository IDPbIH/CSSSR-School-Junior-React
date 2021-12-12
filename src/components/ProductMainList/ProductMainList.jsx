import React from 'react';
import styles from './ProductMainList.module.css';
import productList from '../../products.json';

const ProductItem = ({ isInStock, title, price, subPriceContent }) => {
    return <div className={isInStock ? styles.isInStockTrue : styles.isInStockFalse}>{title}. Цена: {price} {subPriceContent}.</div>
};

const ProductMainLIst = props => {
    const shortProductList = productList.slice(0, 3);
    return (<ul>
        {
            shortProductList.map(product => {
                return (<li key={product.id}>
                    <ProductItem
                        isInStock={product.isInStock}
                        title={product.title}
                        price={product.price}
                        subPriceContent={product.subPriceContent}
                    />
                </li>);
            })
        }
    </ul>);
};

export default ProductMainLIst;