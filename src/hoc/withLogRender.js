import React from 'react';
import LogRender from '../containers/LogRender/LogRender';

export default function withLogRender(InputComponent) {
    return class extends LogRender {
        render() {
            return (
                <InputComponent {...this.props}/>
            );
        }
    };
}
