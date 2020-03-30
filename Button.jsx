import {Text, TouchableHighlight} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";

export default function Button(props){
    let onPress = () => {
        Haptics.selectionAsync().then();
        props.onPress() ;
    };

    return (
            <TouchableHighlight
                style={props.style || appStyles.button.TouchableHighlight}
                onPress={onPress}
                underlayColor={appStyles.blueColor}>
                <Text style={appStyles.button.text}>{props.text}</Text>
            </TouchableHighlight>
    )
}