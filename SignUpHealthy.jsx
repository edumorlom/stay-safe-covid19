import {Image, Text, View} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import care from "./care.png";
import Button from "./Button";

export default function SignUpHealthy(props) {

    return (
        <View duration={1000} style={appStyles.container}>
            <View style={{
                paddingTop: appStyles.win.height * 0.10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute'}}>
                <Text style={{...appStyles.titleRed, color: 'green'}}>{props.getLocalizedText("youreHealthy")}</Text>
                <View style={{margin: '25%'}}>
                    <Image style={{width: 100, height: 100}} source={care}/>
                </View>
                <View style={{width: appStyles.win.width * 0.9}}>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', marginTop: 20, color: appStyles.blueColor} }>{props.getLocalizedText("readyToVolunteer")}</Text>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', color: appStyles.darkGreyColor} }>{props.getLocalizedText("youMakeADifference")}</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '12%'
            }}>
                <Button text={props.getLocalizedText("becomeVolunteer")} style={{...appStyles.button.TouchableHighlight, backgroundColor: 'green'}} onPress={props.LogIn}/>
            </View>
            <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', position: 'absolute', bottom: '5%'} }>{props.getLocalizedText("shareAddressDisclaimer")}</Text>
        </View>
    )

}