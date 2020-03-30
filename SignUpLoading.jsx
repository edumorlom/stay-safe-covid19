import {Image, Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from "react";
import appStyles from './AppStyles'
import loading from "./loading.gif";


export default class SignUpLoading extends React.Component {

    state = {loadingText: this.props.getLocalizedText("registeringAccount"), color: appStyles.greyColor};

    constructor(props) {
        super(props);
        props.signUp();
        setTimeout(() => {
            this.setState({loadingText: this.props.getLocalizedText("allSet"), color: appStyles.blueColor});
            setTimeout(() => {
                props.getResults();
            }, 1000);
        }, 2000);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={appStyles.container}>
                    <View style={{
                        marginTop: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute'}}>
                        <Image source={loading} style={{width: 125, height: 125, marginBottom: 30}}/>
                        <Text style={{...appStyles.paragraphText, color: this.state.color}}>{this.state.loadingText}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}