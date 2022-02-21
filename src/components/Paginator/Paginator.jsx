import React from 'react';
import s from './Paginator.module.css';
import LogRender from '../LogRender/LogRender';
import setURL from '../../utils/setURL';
import { Link } from 'react-router-dom';

class Paginator extends LogRender {
    render() {
        const { totalFilteredProductCount, pageSize, activePage } = this.props;

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);
        const isFirstPage = activePage > 1 ? (activePage - 1) : 1;
        const isLastPage = activePage < pageCount ? (activePage + 1) : pageCount;

        return (
            <div className={s.paginator}>
                <span className={activePage === 1 ? s.side_button : 'false'}>
                    <Link to={setURL('page', isFirstPage)}>
                        <button name='backButton' className={s.inActive_button}>Назад</button>
                    </Link>
                </span>
                {[...Array(pageCount)].map((page, index) => {
                    index++
                    const isChecked = activePage === index;

                    return (
                        <Link to={setURL('page', index)} key={index}>
                            <button
                                name={index}
                                className={isChecked ? s.active_button : s.inActive_button}
                                key={index}>{index}</button>
                        </Link>
                    );
                })}
                <span className={activePage === pageCount ? s.side_button : 'false'}>
                    <Link to={setURL('page', isLastPage)}>
                        <button name='nextButton' className={s.inActive_button}>Вперёд</button>
                    </Link>
                </span>
            </div >
        );
    }
}

export default Paginator;