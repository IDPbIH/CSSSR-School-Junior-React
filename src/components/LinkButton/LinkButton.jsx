import React from 'react';
import page_styles from './PageLinkButton.module.css';
import category_styles from './CategoryLinkButton.module.css';
import Link from '../Link/Link';

class LinkButton extends React.PureComponent {
    render() {
        const { type, value, name, text, isChecked, keyButton } = this.props;

        let styles;
        type === 'page' ? styles = page_styles : styles = category_styles
        
        return (
            <Link type={type} value={value} key={keyButton}>
                <button name={name} className={isChecked ? styles.active_button : styles.inActive_button}>{text}</button>
            </Link>
        );
    }
}

export default LinkButton;