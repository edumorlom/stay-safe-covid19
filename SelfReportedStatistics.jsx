import {Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "./AppStyles";
import React from "react";



export default function CountryStatistics(props){

    return (
        <TouchableHighlight underlayColor={appStyles.underlayColor}
                            style={{
                                margin: 5,
                                padding: 20,
                                backgroundColor: appStyles.blueColor,
                                ...shadow,
                                minHeight: appStyles.win.height * 0.1,
                                maxHeight: appStyles.win.height * 0.2,
                                width: appStyles.win.width * 0.95,
                                borderColor: greyColor,
                                borderRadius: borderRadius,
                                alignItems: 'center',
                                flexDirection: 'row'}}>
            <React.Fragment>
                <View>
                    <Text style={{color: 'white', fontSize: appStyles.regularFontSize, fontWeight: 'bold'}}>Self-Reported Cases</Text>
                    <Text style={{color: 'white', fontSize: appStyles.regularFontSize}}>{'Healthy: ' + props.negative}</Text>
                    <Text style={{color: 'white', fontSize: appStyles.regularFontSize}}>{'Sick: ' + props.positive}</Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}