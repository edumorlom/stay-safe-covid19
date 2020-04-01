import { Keyboard, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import appStyles from '../AppStyles'
import Button from "./Button";
import TextInput from "./TextInput.jsx";





export default class SignUpInfo extends React.Component {

    state = {fullName: '', age:  null};

    setFullName = (fullName) => {
        this.setState({fullName: fullName})
    };

    setAge = (age) => {
        this.setState({age: age})
    };

    onPress = () => {
        if (!this.state.fullName || !this.state.age) {
            alert(this.props.getLocalizedText("fillOutAllFields"))
        } else {
            this.props.setUserInfo({fullName: this.state.fullName, age: this.state.age});
            this.props.getNextScreen();
        }
    };

    render() {
        let titleText = this.state.fullName ? this.props.getLocalizedText("sweet") : this.props.getLocalizedText("niceToMeetYou");
        return (
            <TouchableOpacity onPress={Keyboard.dismiss} accessible={false} style={appStyles.container}>
                    <View style={{
                        paddingTop: appStyles.win.height * 0.1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                    }}>
                        <Text style={appStyles.titleBlue}>
                            {titleText}
                            <Text style={appStyles.titleRed}>
                                {this.state.fullName ? this.state.fullName.split(' ')[0] : ''}
                            </Text>
                            !
                        </Text>
                        <View style={{paddingTop: appStyles.win.height * 0.1}}>
                            <TextInput placeholder={this.props.getLocalizedText("fullName")} onChangeText={this.setFullName}/>
                            <TextInput placeholder={this.props.getLocalizedText("age")} onChangeText={this.setAge} keyboardType={"numeric"}/>
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '12%'
                    }}>
                        <Button text={this.props.getLocalizedText("continueButton")} onPress={()=> this.onPress()}/>
                    </View>
            </TouchableOpacity>
        );
    }
}
