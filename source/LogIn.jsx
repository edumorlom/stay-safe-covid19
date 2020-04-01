import {Animated, Image, Text, ImageBackground, View, TouchableOpacity, Keyboard} from 'react-native';
import React from "react";
import appStyles from '../AppStyles'
import Button from "./Button";
import TextInput from "./TextInput";
import SwipeUp from "./SwipeUp";
import background from '../assets/background.gif'

export default class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this._start();
    }

    state = {email: null, password: null, fadeValue: new Animated.Value(0)};

    setEmail = (email) => {
        this.setState({email: email})
    };

    setPassword = (password) => {
        this.setState({password: password})
    };

    _start = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 2000
        }).start();
    };

    login = () => {
        if (this.state.email && this.state.password) this.props.login(this.state.email, this.state.password)
        else alert(this.props.getLocalizedText('fillOutAllFields'))
    };

    render() {
        return (
            <React.Fragment>
                <Animated.View style={{opacity: this.state.fadeValue, height: '100%', width: '100%'}}>
                    <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
                    <ImageBackground source={background} style={{position: 'absolute', opacity: 0.75, width: appStyles.win.width, height: appStyles.win.height}}/>
                    <View style={{paddingTop: appStyles.win.height * 0.22, alignItems: 'center'}}>
                        <Text style={{margin: 20, fontSize: appStyles.titleFontSize, fontWeight: 'bold', color: 'white', opacity: 0.8}}>#StaySafe</Text>
                        <TextInput placeholder={this.props.getLocalizedText('emailInput')} onChangeText={this.setEmail}/>
                        <TextInput type={"password"} placeholder={this.props.getLocalizedText('passwordInput')} onChangeText={this.setPassword}/>
                        <Button onPress={this.login} text={this.props.getLocalizedText('signInButton')}/>
                    </View>
                    </TouchableOpacity>
                </Animated.View>
                <SwipeUp text={this.props.getLocalizedText('swipeUpToSignUp')}
                         onSwipeUp={() => this.props.setAppState({screen: 'signup'})}/>
            </React.Fragment>


    );
    }
}