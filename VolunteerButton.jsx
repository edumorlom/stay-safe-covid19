import {Image, Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";



export default function VolunteerButton(props){

    let onPress = () => {
        Haptics.selectionAsync().then();
        props.onPress();
    };

    return (
        <View underlayColor={appStyles.underlayColor}
                            onPress={onPress}
                            style={{
                                margin: 5,
                                padding: 20,
                                backgroundColor: 'white',
                                ...shadow,
                                minHeight: appStyles.win.height * 0.1,
                                maxHeight: appStyles.win.height * 0.1,
                                borderColor: greyColor,
                                borderRadius: borderRadius,
                                alignItems: 'center',
                                flexDirection: 'row'}}>
            <React.Fragment>
                <View style={{height: '100%', width: '80%'}}>
                    <Text style={{color: appStyles.blueColor, fontSize: appStyles.regularFontSize, fontWeight: 'bold'}}>{"I Want To Volunteer"}</Text>
                </View>
            </React.Fragment>
        </View>
    )
}