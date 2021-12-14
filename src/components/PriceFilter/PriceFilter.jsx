import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';
import styles from './PriceFilter.module.css';

class PriceFilter extends LogRender {
    handleSubmit = (e) => {
        if (e.target[0].value >= 0 && e.target[1].value >= 0) {
            e.preventDefault();
            this.props.changeState(e.target[0].value,e.target[1].value);
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
                        defaultValue={this.props.minValue} />
                    до <input type="text"
                        className={styles.price_filter_maxValue}
                        defaultValue={this.props.maxValue} />
                </div>
                <div className={styles.price_filter_button}>
                    <button>Применить</button>
                </div>
            </form>
        );
    }
}

export default PriceFilter;