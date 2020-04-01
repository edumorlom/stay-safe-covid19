import React from 'react';
import {ScrollView, Text} from "react-native";
import appStyles from "../AppStyles";
import SelectionButton from "./SelectionButton";
import thermometer from '../assets/thermometer.png'
import cough from "../assets/cough.png";
import wind from "../assets/wind.png";
import lungs from "../assets/lungs.png";
import lips from "../assets/lips.png";
import pain from '../assets/medicine.png'
import heart from '../assets/heart.png'


export default class Symptoms extends React.Component {

    state = {news: []};

    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
                <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 10}}>{this.props.getLocalizedText("commonSymptoms") + ":"}</Text>
                <SelectionButton text={this.props.getLocalizedText("fever")} icon={thermometer}
                                 onPress={() => {}}/>
                <SelectionButton text={this.props.getLocalizedText("cough")} icon={cough}
                                 onPress={() => {}}/>
                <SelectionButton text={this.props.getLocalizedText("shortnessBreath")} icon={wind}
                                 onPress={() => {}}/>
                <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 40, textAlign: 'center'}}>{this.props.getLocalizedText("seekMedicalAttention") + ":"}</Text>
                <SelectionButton text={this.props.getLocalizedText("troubleBreathing")} icon={lungs}
                                 onPress={() => {}}/>
                <SelectionButton text={this.props.getLocalizedText("persistentPain")} icon={pain}
                                 onPress={() => {}}/>
                <SelectionButton text={this.props.getLocalizedText("pressureChest")} icon={heart}
                                 onPress={() => {}}/>
                <SelectionButton text={this.props.getLocalizedText("bluish")} icon={lips}
                                 onPress={() => {}}/>
            </ScrollView>
        )
    }
}