import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ currentPage, pageSize, totalFilteredProductCount, setCurrentPageAC }) => {
    const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const handleClick = (event) => {
        switch (event.target.name) {
            case 'backPageButton':
                return currentPage > 1 && setCurrentPageAC(currentPage-1);
            case 'nextPageButton':
                return currentPage < pages.length && setCurrentPageAC(currentPage+1);
            default:
                return setCurrentPageAC(event.target.value);
        }
    }

    return (
        <div>
            <button name='backPageButton' className={styles.back_button} onClick={handleClick}>Назад</button>
            {pages.map((page, index) => {
                return <button className={page === currentPage ? styles.selected_page : undefined}
                    name='pageButton'
                    value={page}
                    key={index}
                    onClick={handleClick}>{page}</button>
            })}
            <button name='nextPageButton' className={styles.forward_button} onClick={handleClick}>Вперёд</button>
        </div >
    );
}

export default Paginator;