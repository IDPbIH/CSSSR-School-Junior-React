import React from 'react';
import styles from './PriceFilter.module.css';

const PriceFilter = ({ minValue, maxValue, changeState }) => {
    let handleSubmit = (e) => {
        if (e.target[0].value >= 0 && e.target[1].value >= 0) {
            e.preventDefault();
            changeState(e.target[0].value,e.target[1].value);
        } else {
            alert('Введите неотрицательное значение для фильтра!');
        }
    }

    return (
        <form className={styles.price_filter} onSubmit={handleSubmit}>
            <div className={styles.price_filter_header}>Цена</div>
            <div className={styles.price_filter_input}>
                от <input type="text"
                    className={styles.price_filter_minValue}
                    defaultValue={minValue} />
                до <input type="text"
                    className={styles.price_filter_maxValue}
                    defaultValue={maxValue} />
            </div>
            <div className={styles.price_filter_button}>
                <button>Применить</button>
            </div>
        </form>
    );
}

export default PriceFilter;