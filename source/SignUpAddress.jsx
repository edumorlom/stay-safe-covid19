import { Keyboard, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import appStyles from '../AppStyles'
import Button from "./Button";
import TextInput from "./TextInput.jsx";





export default class SingUpAddress extends React.Component {

    state = {street: '', city: '', zipCode: ''};

    setStreet = (street) => {
        this.setState({street: street})
    };
    setCity = (city) => {
        this.setState({city: city})
    };

    setZipCode = (zipCode) => {
        this.setState({zipCode: zipCode})
    };

    onPress = () => {
        if (!this.state.street || !this.state.city || !this.state.zipCode) {
            alert(this.props.getLocalizedText("fillOutAllFields"))
        } else {
            this.props.setUserInfo({address: {street: this.state.street,city: this.state.city, zipCode: this.state.zipCode}});
            this.props.getNextScreen();
            this.props.convertAddressToCoordinates({street: this.state.street,city: this.state.city, zipCode: this.state.zipCode});
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={Keyboard.dismiss} accessible={false} style={appStyles.container}>
                <View style={{
                    paddingTop: appStyles.win.height * 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                }}>
                    <Text style={appStyles.titleBlue}>{this.props.getLocalizedText('yourAddress')}</Text>
                    <View style={{paddingTop: appStyles.win.height * 0.1}}>
                        <TextInput placeholder={this.props.getLocalizedText('street')} onChangeText={this.setStreet}/>
                        <TextInput placeholder={this.props.getLocalizedText('city')} onChangeText={this.setCity}/>
                        <TextInput placeholder={this.props.getLocalizedText('zipCode')} onChangeText={this.setZipCode}/>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: '12%'
                }}>
                    <Button text={this.props.getLocalizedText("continueButton")} onPress={this.onPress}/>
                </View>
            </TouchableOpacity>
        );
    }
}
