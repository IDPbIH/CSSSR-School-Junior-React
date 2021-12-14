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
    }

    toggleActive = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        if (e.target[0].value >= 0 && e.target[1].value >= 0) {
            e.preventDefault();
            this.setState({
                minValue: e.target[0].value,
                maxValue: e.target[1].value
            });
        } else {
            alert('Введите неотрицательное значение для фильтра!');
        }
    }

    render() {
        return (
            <form className={styles.price_filter} onSubmit={this.handleSubmit}>
                <div className={styles.price_filter_header}>Цена</div>
                <div className={styles.price_filter_input}>
                    от <input type="text"
                        className={styles.price_filter_minValue}
                        defaultValue={this.state.minValue} />
                    до <input type="text"
                        className={styles.price_filter_maxValue}
                        defaultValue={this.state.maxValue} />
                </div>
                <div className={styles.price_filter_button}>
                    <button>Применить</button>
                </div>
            </form>
        );
    }
}

export default PriceFilter;