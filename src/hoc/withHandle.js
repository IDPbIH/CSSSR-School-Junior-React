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
                switch (event.target.name) {
                    case 'minPriceValue':
                        return this.props.changeMinPriceValueAC(event.target.value);
                    case 'maxPriceValue':
                        return this.props.changeMaxPriceValueAC(event.target.value);
                    case 'discountValue':
                        return this.props.changeDiscountValueAC(event.target.value);
                    default:
                }
            } else {
                this.setState({ error: true })
            }
        }

        handleClick = (event) => {
            event.preventDefault();
            this.setState({ value: event.target.value });
            event.target.value = 0;
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
                    handleOnBlur={this.handleOnBlur}
                />
            );
        }
    };
}