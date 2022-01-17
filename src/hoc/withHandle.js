import React from 'react';

export default function withHandle(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                error: false,
                value: 0
            };
        }

        handleChange = (event) => {
            if (!isNaN(event.target.value)) {
                this.setState({ error: false })
                this.props.changeInputValue(event);
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