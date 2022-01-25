import React from 'react';
import styles from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';

class FilterList extends LogRender {
    setDefault = (event) => {
        event.preventDefault();
        this.props.setInitialMainState();
        this.props.setInitialRoutingState();
    }

    render() {
        const { filterValue: { minPriceValue, maxPriceValue, discountValue, activeCategories }, categories,
            changeInputValue } = this.props;

        return (
            <div>
                <form>
                    {this.props.renderInputNumber(minPriceValue, maxPriceValue, changeInputValue)}
                    {this.props.renderInputDiscount(discountValue, changeInputValue)}
                    {this.props.renderInputCategory(categories, activeCategories)}
                </form>
                <button className={styles.reset_button} onClick={this.setDefault}>Сбросить фильтры</button>
            </div>
        );
    }
}

export default FilterList;