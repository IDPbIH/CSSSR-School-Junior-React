import React from 'react';
import styles from './InputNumber.module.css'

class InputNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleClick = (e) => {
        this.setState({ value: '' });
        e.preventDefault();
    }

    render() {
        return (
            <input type="text"
                className={this.props.className}
                value={this.state.value}
                onClick={this.handleClick}
                onChange={this.handleChange}
            />
        );
    }
}

export default InputNumber;