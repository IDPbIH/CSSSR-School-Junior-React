import React from 'react';
import { connect } from 'react-redux';
import Link from '../Link/Link';
import styles from './Paginator.module.css';

// const Paginator = ({ currentPage, pageSize, totalFilteredProductCount, setCurrentPageAC }) => {
class Paginator extends React.Component {
    componentDidUpdate(newProps) {
        
        if (this.props.query.page !== newProps.query.page) {
            // requestPageItems(newProps.query.page);
           
           
        }
    }

    render() {
        const { currentPage, pageSize, totalFilteredProductCount, setCurrentPageAC } = this.props;

        const pageCount = Math.ceil(totalFilteredProductCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        const onLinkClick = (event) => {
            // switch (event.target.name) {
            //     case 'backPageButton':
            //         return currentPage > 1 && setCurrentPageAC(currentPage - 1);
            //     case 'nextPageButton':
            //         return currentPage < pages.length && setCurrentPageAC(currentPage + 1);
            //     default:
            //         return setCurrentPageAC(event.target.value);
            // }
        }

        return (
            <div>
                <button name='backPageButton' className={styles.back_button}>Назад</button>
                {pages.map((page) => {
                    return <Link href={`/?page=${page}`} key={page}>
                        <button className={page === currentPage ? styles.active_button : styles.center_button}
                            name={`pageButton ${page}`}
                            value={page}
                            key={page}
                        >{page}</button>
                    </Link>
                })}
                <button name='nextPageButton' className={styles.forward_button}>Вперёд</button>
            </div >
        );
    }
}

/////
export default connect(state => {
    return {
        query: state.routing.query
    }
 })(Paginator);

// export default Paginator;