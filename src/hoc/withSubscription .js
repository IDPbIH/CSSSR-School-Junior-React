import React from 'react';
import { changeDiscountValue, changeMaxPriceValue, changeMinPriceValue } from '../store/mainReducer';

export default function withSubscription(InputComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                error: false,
                value: null
            };
        }

        handleChange = (event) => {
            if (!isNaN(event.target.value)) {
                this.setState({ error: false })
                switch (event.target.name) {
                    case 'minPriceValue':
                        return this.props.dispatch(changeMinPriceValue(event.target.value));
                    case 'maxPriceValue':
                        return this.props.dispatch(changeMaxPriceValue(event.target.value));
                    case 'discountValue':
                        return this.props.dispatch(changeDiscountValue(event.target.value));
                    default:
                }
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
