import React from 'react';

export default function withSubscription(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                error: false,
                value: null
            };
        }

        handleChange = (e) => {
            if (!isNaN(e.target.value)) {
                this.setState({ error: false })
                this.props.handleStateChange(e);
            } else {
                this.setState({ error: true })
            }
        }

        handleClick = (e) => {
            e.target.value = 0;
            this.props.handleStateChange(e);
            e.preventDefault();;
        }

        handleOnFocus = (e) => {
            this.setState({ value: e.target.value });
        }

        handleOnBlur = (e) => {
            e.target.value = this.state.value;
        }

        render() {
            return (
                <InputComponent {...this.props}
                    error={this.state.error}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleOnFocus={this.handleOnFocus}
                    handleOnBlur={this.handleOnBlur}
                />
            );
        }
    };
}
