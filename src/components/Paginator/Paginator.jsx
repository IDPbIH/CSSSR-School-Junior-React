import React from 'react';
import styles from './Paginator.module.css';

class Paginator extends React.Component {
    
    render() {
        return (
            <div>
                <button name='backButton' className={styles.back_button} onClick={this.handleClick}>Назад</button>
                <span>1</span>
                <span className={styles.selected_page}>2</span>
                <span>3</span>
                <button name='forwardButton' className={styles.forward_button} onClick={this.handleClick}>Вперёд</button>
            </div>
        );
    }
}

export default Paginator;