import {View, Linking, Text, ScrollView} from "react-native";
import React from "react";
import UserSelectionButton from "./UserSelectionButton";
import ActionButton from "./ActionButton";
import appStyles from './AppStyles'
import smsIcon from './assets/sms-icon.png'
import callIcon from './assets/call-icon.png'
import directionsArrow from './assets/directions-arrow.png'

export default function UserInfo(props){

    let getDirections = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${props.user.coordinate.latitude},${props.user.coordinate.longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    };


    let call = () => {
        Linking.openURL('tel:' + props.user.phoneNumber)
    };

    let text = () => {
        let message;
        if (props.user.sick === true) message = "Hello, " + props.user.fullName + "! I saw you need help through the #StayAtHome app! Please let me know what I can do to help you stay at home.";
        else message = "Hello, " + props.user.fullName + "! I found you through the #StayHome app. I am currently under complete isolation and I am in need of some help. Could you please help me";
        Linking.openURL(`sms:?7867154286&body=` + message);
    };

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}>
                <UserSelectionButton user={props.user} icon={directionsArrow} onPress={getDirections}/>
                <ActionButton mainAction={props.getLocalizedText("callUser")} subAction={props.user.phoneNumber} onPress={call} icon={callIcon}/>
                <ActionButton mainAction={props.getLocalizedText("textUser")} subAction={props.user.phoneNumber} onPress={text} icon={smsIcon}/>
            <View style={{alignItems: 'center', marginTop: '5%', marginBottom: 11}}>
                <Text style={{color: appStyles.redColor, fontWeight: 'bold'}}>Avoid All Physical Contact With This Person!</Text>
                </View>
        </ScrollView>
    )
}