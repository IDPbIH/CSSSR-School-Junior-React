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
                this.props.handleStateChange('input', e);
            } else {
                this.setState({ error: true })
            }
        }

        handleClick = (e) => {
            e.preventDefault();;
            e.target.value = 0;
            this.props.handleStateChange('input', e);
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
