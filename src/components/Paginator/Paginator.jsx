import React from 'react';
import s from './Paginator.module.css';
import LinkButton from '../LinkButton/LinkButton';
import LogRender from '../LogRender/LogRender';
import { getActivePageFromURL } from '../../utils/getFromURL';

class Paginator extends LogRender {
    render() {
        const { totalFilteredProductCount, pageSize } = this.props;
        const activePage = getActivePageFromURL();

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

        return (
            <div className={s.paginator}>
                <span className={activePage === 1 ? s.side_button_visible : 'false'}>
                    <LinkButton type='page'
                        name={activePage > 1 ? (activePage - 1) : 1}
                        text='Назад' />
                </span>
                {[...Array(pageCount)].map((page, index) => {
                    index++
                    return (
                        <LinkButton type='page'
                            name={index}
                            text={index}
                            key={index} />
                    );
                })}
                <span className={activePage === pageCount ? s.side_button_visible : 'false'}>
                    <LinkButton type='page'
                        name={activePage < pageCount ? (activePage + 1) : pageCount}
                        text='Вперёд' />
                </span>
            </div >
        );
    }
}

export default Paginator;