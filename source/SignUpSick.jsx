import {Image, Text, View} from "react-native";
import appStyles from "../AppStyles";
import React from "react";
import miamiImage from "../assets/virus.png";
import Button from "./Button";

export default function SignUpSick(props) {

    return (
        <View duration={1000} style={appStyles.container}>
            <View style={{
                paddingTop: appStyles.win.height * 0.10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute'}}>
                <Text style={appStyles.titleRed}>{props.getLocalizedText("stayAtHome")}</Text>
                <View style={{margin: '25%'}}>
                    <Image style={{width: 100, height: 100}} source={miamiImage}/>
                </View>
                <View style={{width: appStyles.win.width * 0.9}}>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', marginTop: 30, color: appStyles.blueColor} }>{props.getLocalizedText("youMightHaveCOVID")}</Text>
                    <Text style={{...appStyles.paragraphText, textAlign: 'center', color: appStyles.darkGreyColor} }>{props.getLocalizedText("nothingSerious")}</Text>
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