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
                                paddingLeft: 20,
                                marginBottom: 10,
                                backgroundColor: 'white',
                                ...shadow,
                                height: appStyles.win.height * 0.15,
                                width: appStyles.win.width * 0.90,
                                borderColor: greyColor,
                                borderRadius: borderRadius,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
            <React.Fragment>
                <View style={{height: '100%', marginLeft: '10%', justifyContent: 'center'}}>
                    <Image style={{width: 60, height: 60}} source={props.icon} />
                </View>
                <View style={{marginLeft: '15%', maxWidth: 150}}>
                    <Text style={{color: 'black', fontSize: appStyles.regularFontSize, fontWeight: 'bold'}}>{props.text}</Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}