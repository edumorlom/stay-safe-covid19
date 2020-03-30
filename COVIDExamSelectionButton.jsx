import {Image, Text, TouchableHighlight, View} from "react-native";
import appStyles, {borderRadius, greyColor, shadow} from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";



export default class COVIDExamSelectionButton extends React.Component {
    state = {selected: false};

    onPress = () => {
        this.setState({selected: !this.state.selected})
        Haptics.selectionAsync().then();
        this.props.onPress();
    };

    render() {

        return (
            <TouchableHighlight underlayColor={appStyles.underlayColor}
                                onPress={this.onPress}
                                style={{
                                    margin: 5,
                                    padding: 20,
                                    backgroundColor: this.state.selected ? appStyles.blueColor :'white',
                                    ...shadow,
                                    minHeight: appStyles.win.height * 0.1,
                                    maxHeight: appStyles.win.height * 0.2,
                                    width: appStyles.win.width * 0.95,
                                    borderColor: greyColor,
                                    borderRadius: borderRadius,
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                    <View style={{height: '100%', width: '100%'}}>
                        <Text style={{
                            color: this.state.selected ? 'white' : appStyles.blueColor,
                            fontSize: appStyles.regularFontSize,
                            fontWeight: 'bold',
                        }}>{this.props.title}</Text>
                        <Text style={{
                            color: this.state.selected ? 'white' : appStyles.greyColor,
                            fontSize: appStyles.regularFontSize
                        }}>{this.props.description}</Text>
                    </View>
            </TouchableHighlight>
        )
    }
}