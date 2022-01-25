import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import styles from './Paginator.module.css';

class Paginator extends React.Component {
    render() {
        const { activePage, pageSize, totalFilteredProductCount } = this.props;

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.paginator}>
                <LinkButton type='page' 
                    name='backPageButton'
                    value={activePage > 1 ? (activePage - 1) : 1}
                    text='Назад'
                    classNameButton={styles.side_button} />
                {pages.map((page) => {
                    
                    return (
                        <LinkButton type='page' 
                            name={`pageButton ${page}`}
                            value={page}
                            text={page}
                            classNameButton={page === activePage
                                ? styles.active_button
                                : styles.center_button}
                            keyButton={page}
                            key={page} />
                    );
                })}
                <LinkButton type='page' 
                    name='nextPageButton'
                    value={activePage < pages.length ? (activePage + 1) : pages.length}
                    text='Вперёд'
                    classNameButton={styles.side_button} />
            </div >
        );
    }
}

export default Paginator;