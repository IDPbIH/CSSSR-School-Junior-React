import React from 'react';
import Link from '../Link/Link';

class LinkButton extends React.PureComponent {
    render() {
        const { type, value, name, text, classNameButton, keyButton } = this.props;

        return (
            <Link type={type} value={value} key={keyButton}>
                <button name={name} className={classNameButton}>{text}</button>
            </Link>
        );
    }
}

export default LinkButton;