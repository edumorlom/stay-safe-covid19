import React from "react";
import SignUpExtremeResults from "./SignUpExtreme";
import SignUpSick from "./SignUpSick";
import SignUpHealthy from "./SignUpHealthy";

export default class SignUpResults extends React.Component {
    state = {healthStatus: 'mild'};

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.healthStatus !== this.props.healthStatus;
    }

    render() {
        if (this.props.healthStatus === 'extreme') {
            return <SignUpExtremeResults LogIn={this.props.LogIn} getLocalizedText={this.props.getLocalizedText}/>
        } else if (this.props.healthStatus === 'mild') {
            return <SignUpSick LogIn={this.props.LogIn} getLocalizedText={this.props.getLocalizedText}/>
        } else {
            return <SignUpHealthy LogIn={this.props.LogIn} getLocalizedText={this.props.getLocalizedText}/>
        }

    }
}