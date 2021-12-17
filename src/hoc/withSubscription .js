import React from 'react';

export default function withSubscription(InputComponent) {
    return class extends React.Component {
        handleChange = (e) => {
            !isNaN(e.target.value) && this.props.handleSubmit(e.target.value, e.target.name);
        }

        handleClick = (e) => {
            e.target.value = '';
            e.preventDefault();;
        }

        render() {
            return (
                <InputComponent handleChange={this.handleChange} handleClick={this.handleClick} {...this.props} />
            );
        }
    };
}
