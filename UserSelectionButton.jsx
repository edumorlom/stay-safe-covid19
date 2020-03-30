import {Image, Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";



export default function UserSelectionButton(props){

    let onPress = () => {
        Haptics.selectionAsync().then();
        props.onPress();
    };

    return (
        <TouchableHighlight underlayColor={appStyles.underlayColor}
                            onPress={onPress}
                            style={{
                                margin: 5,
                                padding: 20,
                                backgroundColor: 'white',
                                ...shadow,
                                minHeight: appStyles.win.height * 0.1,
                                maxHeight: appStyles.win.height * 0.2,
                                width: appStyles.win.width * 0.95,
                                borderColor: greyColor,
                                borderRadius: borderRadius,
                                alignItems: 'center',
                                flexDirection: 'row'}}>
            <React.Fragment>
                <View style={{height: '100%', width: '80%'}}>
                    <Text style={{color: appStyles.blueColor, fontSize: appStyles.regularFontSize, fontWeight: 'bold'}}>{props.user.fullName.split(" ")[0] || props.user.fullName}</Text>
                    <Text style={{color: props.user.sick ? appStyles.redColor : 'green', fontSize: appStyles.regularFontSize}}>{props.user.sick ? 'Needs Help' : 'Volunteer'}</Text>
                    <Text style={{color: appStyles.greyColor, fontSize: appStyles.regularFontSize}}>{props.user.address ? props.user.address.city : ''}</Text>
                    <Text style={{color: appStyles.greyColor, fontSize: appStyles.regularFontSize}}>{props.user.age + ' Years Old'}</Text>
                </View>
                <View style={{height: '100%', width: '7%', justifyContent: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={props.icon} />
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}