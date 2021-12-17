import React from 'react';

export default function withSubscription(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                value: null
            };
        }

        handleChange = (e) => {
            !isNaN(e.target.value) && this.props.handleSubmit(e.target.value, e.target.name);
        }

        handleClick = (e) => {
            e.target.value = 0;
            e.preventDefault();;
        }

        handleOnFocus = (e) => {
            this.setState({ value: e.target.value });
        }

        handleOnBlur = (e) => {
            this.props.handleSubmit(e.target.value, e.target.name)
        }

        render() {
            return (
                <InputComponent {...this.props}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleOnFocus={this.handleOnFocus}
                    handleOnBlur={this.handleOnBlur}
                />
            );
        }
    };
}
