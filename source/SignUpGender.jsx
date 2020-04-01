import { Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from "react";
import appStyles from '../AppStyles'
import MultipleChoiceButton from "./MultipleChoiceButton";
import Button from "./Button";


export default class SignUpGender extends React.Component {
    state = {babyGender: {male: false, female: false}};

    onPress = () => {
        this.props.setUserInfo({babyGender: {male: this.state.babyGender.male, female: this.state.babyGender.female}});
        this.props.getNextScreen();
    };

    setBabyGender = (babyGender) => {
        let male = this.state.babyGender.male;
        let female = this.state.babyGender.female;


        if (babyGender === 'male'){
            male = true;
            female = false;
        } else if (babyGender === 'female') {
            female = true;
            male = false;
        }
        this.setState({babyGender: {male: male, female: female}})
    };

    render() {
        let genderSelected = this.state.babyGender.male || this.state.babyGender.female;
        let backgroundColor = "white";
        let textColor = "black";

        if (genderSelected) {
            textColor = "white";
        }

        if (this.state.babyGender.male && this.state.babyGender.female) {
            backgroundColor = "#800080"
        } else if (this.state.babyGender.male) {
            backgroundColor = appStyles.blueColor;
        } else if (this.state.babyGender.female) {
            backgroundColor = '#FF2F92'
        }

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{...appStyles.container, backgroundColor: backgroundColor}}>
                    <View style={{
                        paddingTop: appStyles.win.height * 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute'}}>
                        <Text style={{color: textColor, fontSize: appStyles.regularFontSize, fontWeight: 'bold', textAlign: 'center'}}>{this.props.getLocalizedText("genderSelection")}</Text>
                            <View style={appStyles.rowContainer}>
                                <MultipleChoiceButton text={'♂'} color={appStyles.blueColor} selected={this.state.babyGender.male} onPress={() => this.setBabyGender('male')}/>
                                <MultipleChoiceButton text={"♀"} color={'#FF2F92'} selected={this.state.babyGender.female} onPress={() => this.setBabyGender('female')}/>
                            </View>
                    </View>
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '12%'}}>
                        <Button text={this.state.babyGender.male || this.state.babyGender.female ? this.props.getLocalizedText("continueButton") : this.props.getLocalizedText("dontDiscloseGender")} onPress={this.onPress}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}