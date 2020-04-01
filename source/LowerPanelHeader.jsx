import {Image, Text, TouchableHighlight, View} from "react-native";
import appStyles from "../AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";
import goBack from "../assets/go-back-arrow.png";


export default function LowerPanelHeader(props) {

    let onPress = () => {
        Haptics.selectionAsync().then();
        props.onPress();
    };

    let getCurrentHeaderTitle = () => {
        if ((props.lowerPanelContent === 'findHelp' || props.lowerPanelContent === 'userInfo') && props.sick) return props.getLocalizedText("findHelp");
        if ((props.lowerPanelContent === 'findHelp' || props.lowerPanelContent === 'userInfo') && !props.sick) return props.getLocalizedText("volunteer");
        if (props.lowerPanelContent === 'discover') return props.getLocalizedText("discover");
        if (props.lowerPanelContent === 'learn') return props.getLocalizedText("learn");
        if (props.lowerPanelContent === 'symptoms') return props.getLocalizedText("symptoms");
        if (props.lowerPanelContent === 'news') return props.getLocalizedText("news");
        if (props.lowerPanelContent === 'statistics') return props.getLocalizedText("statistics")
    };

    return (
        <TouchableHighlight onPress={onPress} underlayColor={'transparent'} style={{padding: 20}}>
            <View style={{...appStyles.rowContainer, width: '100%'}}>
                <View style={{
                    right: appStyles.win.width * 0.28,
                    paddingLeft: appStyles.win.width * 0.07,
                    justifyContent: 'center'
                }}>
                    <Image style={{height: appStyles.win.width * 0.06, width: appStyles.win.width * 0.06}}
                           source={goBack}/>
                </View>
                <Text style={{...appStyles.paragraphText, right: appStyles.win.width * 0.04}}>{getCurrentHeaderTitle()}</Text>
            </View>
        </TouchableHighlight>
    )
}