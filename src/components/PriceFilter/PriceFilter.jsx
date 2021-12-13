import React from 'react';
import styles from './PriceFilter.module.css';
import productList from '../../products.json';

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);

        const productListPriceArray = productList.map(product => {
            return (product.price);
        });
        this.state = {
            minValue: Math.min.apply(null, productListPriceArray),
            maxValue: Math.max.apply(null, productListPriceArray)
        };
        this.input = React.createRef();
    }

    handleClick = (e) => {
        console.log('1');
    }

    handleSubmit = (e) => {
        e.target[0].value = 200;
    }

    render() {
        return (
            <form className={styles.price_filter} onSubmit={this.handleSubmit}>
                <div className={styles.price_filter_header}>Цена</div>
                <div className={styles.price_filter_input}>от <input
                    type="text"
                    defaultValue={this.state.minValue}
                    onClick={this.handleClick} />
                    до <input
                        type="text"
                        defaultValue={this.state.maxValue}
                        onClick={this.handleClick}
                        ref={this.input} />
                </div>
                <div className={styles.price_filter_button}>
                    <button>Применить</button>
                </div>
            </form>
        );
    }
}

export default PriceFilter;