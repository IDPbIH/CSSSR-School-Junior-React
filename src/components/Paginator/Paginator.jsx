import React from 'react';
import styles from './Paginator.module.css';
import LinkButton from '../LinkButton/LinkButton';

class Paginator extends React.Component {
    render() {
        const { activePage, pageSize, totalFilteredProductCount } = this.props;

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

        return (
            <div className={styles.paginator}>
                <LinkButton type='page'
                    name='backPageButton'
                    value={activePage > 1 ? (activePage - 1) : 1}
                    text='Назад'
                    classNameButton={styles.side_button} />

                {[...Array(pageCount)].map((page, key) => {
                    key++
                    return (
                        <LinkButton type='page'
                            name={`pageButton ${key}`}
                            value={key}
                            text={key}
                            isChecked={key === activePage ? true : false}
                            keyButton={key}
                            key={key} />
                    );
                })}

                <LinkButton type='page'
                    name='nextPageButton'
                    value={activePage < pageCount ? (activePage + 1) : pageCount}
                    text='Вперёд'
                    classNameButton={styles.side_button} />
            </div >
        );
    }
}

export default Paginator;