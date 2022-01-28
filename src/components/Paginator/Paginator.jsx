import React from 'react';
import s from './Paginator.module.css';
import LinkButton from '../LinkButton/LinkButton';

class Paginator extends React.Component {
    render() {
        const { activePage, pageSize, totalFilteredProductCount } = this.props;

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

        return (
            <div className={s.paginator}>
                <span className={activePage === 1 ? s.side_button_visible : 'false'}>
                    <LinkButton type='page'
                        name='backPageButton'
                        value={activePage > 1 ? (activePage - 1) : 1}
                        text='Назад' />
                </span>
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
                <span className={activePage === pageCount ? s.side_button_visible : 'false'}>
                    <LinkButton type='page'
                        name='nextPageButton'
                        value={activePage < pageCount ? (activePage + 1) : pageCount}
                        text='Вперёд' />
                </span>
            </div >
        );
    }
}

export default Paginator;