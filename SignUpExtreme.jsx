import {Image, Text, View} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import medicine from "./getHelp.png";
import Button from "./Button";

export default function SignUpExtreme(props) {

    return (
        <View duration={1000} style={appStyles.container}>
            <View style={{
                paddingTop: appStyles.win.height * 0.10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute'}}>
                <Text style={appStyles.titleRed}>{"Call Your Doctor"}</Text>
                <View style={{margin: '25%'}}>
                    <Image style={{width: 100, height: 100}} source={medicine}/>
                </View>
                <View style={{width: appStyles.win.width * 0.9}}>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', marginTop: 20, color: appStyles.blueColor} }>{props.getLocalizedText("extremeSymptoms")}</Text>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', color: appStyles.darkGreyColor} }>{props.getLocalizedText("emergency")}</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '12%'
            }}>
                <Button text={props.getLocalizedText("iUnderstandButton")} onPress={props.LogIn}/>
            </View>
            <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', position: 'absolute', bottom: '5%'} }>{props.getLocalizedText("shareAddressDisclaimer")}</Text>
        </View>
    )

}