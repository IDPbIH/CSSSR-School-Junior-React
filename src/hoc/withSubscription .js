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
                this.props.handleStateChange('input', e.target.name, e.target.value);
            } else {
                this.setState({ error: true })
            }
        }

        render() {
            return (
                <InputComponent {...this.props}
                    error={this.state.error}
                    handleChange={this.handleChange}
                />
            );
        }
    };
}
