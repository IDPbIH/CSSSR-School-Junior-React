import React from 'react';
import InputMask from 'react-input-mask';
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
        this.props.handleSubmit(e.target.value,this.props.title);
    }

    handleClick = (e) => {
        this.setState({ value: '' });
        e.preventDefault();
    }

    render() {
        return (
            <InputMask mask={'999999'}
                maskChar={null}
                className={this.props.className}
                value={this.state.value}
                onClick={this.handleClick}
                onChange={this.handleChange}
            />
        );
    }
}

export default InputNumber;