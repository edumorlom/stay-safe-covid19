import {Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "../AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";



export default function RegionStatisticsButton(props){

    let onPress = () => {
        Haptics.selectionAsync().then();
        props.onPress();
    };

    let numberWithCommas = number => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                <View>
                    <Text style={{color: props.country.TotalConfirmed === 0 ? 'green' : appStyles.blueColor, fontSize: appStyles.regularFontSize, fontWeight: 'bold'}}>{props.country.Country}</Text>
                    <Text style={{color: 'black', fontSize: appStyles.regularFontSize}}>{props.country.TotalConfirmed ? props.getLocalizedText("totalSick") + ': ' + numberWithCommas(props.country.TotalConfirmed):  props.getLocalizedText('totalSick') +': 0'}</Text>
                    <Text style={{color: appStyles.greyColor, fontSize: appStyles.regularFontSize}}>{props.country.TotalDeaths ? props.getLocalizedText("totalDeaths") + ': ' + numberWithCommas(props.country.TotalDeaths) : props.getLocalizedText("totalDeaths") + ': 0'}</Text>
                    <Text style={{color: appStyles.redColor, fontSize: appStyles.regularFontSize}}>{props.country.NewDeaths ? props.getLocalizedText("newDeaths") + ': ' + numberWithCommas(props.country.NewDeaths) : ''}</Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    )
}