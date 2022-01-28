import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import Link from '../Link/Link';

class LinkButton extends React.PureComponent {
    render() {
        const { type, value, name, text, isChecked, keyButton } = this.props;

        let s;
        type === 'page' ? s = page_s : s = category_s

        return (
            <Link type={type} value={value} key={keyButton}>
                <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
            </Link>
        );
    }
}

export default LinkButton;