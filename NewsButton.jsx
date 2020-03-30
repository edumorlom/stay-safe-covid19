import {Linking, Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";
import {RFValue} from "react-native-responsive-fontsize";



export default function NewsButton(props){

    let onPress = () => {
        Haptics.selectionAsync().then();
        Linking.openURL(props.url);
    };

   let parseUrl = (url) => {
        console.log(url);
        url = url.split('/')[2];
        return url
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
                                width: appStyles.win.width * 0.95,
                                borderColor: greyColor,
                                borderRadius: borderRadius,
                                alignItems: 'center',
                                flexDirection: 'row'}}>
            <React.Fragment>
                <View style={{height: '100%', width: '100%'}}>
                    <Text style={{color: appStyles.blueColor, fontSize: RFValue(15), fontWeight: 'bold'}}>{props.title.substring(0, 90)+'...'}</Text>
                    <Text style={{color: 'black', fontSize: RFValue(20)}}>{parseUrl(props.url)}</Text>
                    <Text style={{color: appStyles.greyColor, fontSize: 20}}>{props.timestamp.replace('T', ' at ').replace('Z', '')}</Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}