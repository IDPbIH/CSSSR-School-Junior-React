import React from 'react';
import LogRender from '../../containers/LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import styles from './PriceFilter.module.css';

class PriceFilter extends LogRender {
    render() {
        return (
            <form className={styles.price_filter}>
                <div className={styles.price_filter_header}>Цена</div>
                <div className={styles.price_filter_input}>
                    от <InputNumber
                        title={'minValueInput'}
                        className={styles.price_filter_minValue}
                        defaultValue={this.props.minValue}
                        handleSubmit={this.props.handleSubmit}
                    />
                    до <InputNumber
                        title={'maxValueInput'}
                        className={styles.price_filter_maxValue}
                        defaultValue={this.props.maxValue}
                        handleSubmit={this.props.handleSubmit}
                    />
                </div>
            </form>
        );
    }
}

export default PriceFilter;