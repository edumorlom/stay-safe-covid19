import React from 'react';
import {ScrollView, Text} from "react-native";
import appStyles from "./AppStyles";
import SelectionButton from "./SelectionButton";
import thermometer from './assets/thermometer.png'
import cough from "./assets/cough.png";
import wind from "./assets/wind.png";
import lungs from "./assets/lungs.png";
import lips from "./assets/lips.png";
import pain from './assets/medicine.png'
import heart from './assets/heart.png'


export default class Symptoms extends React.Component {

    state = {news: []};

    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
                <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 10}}>Common Symptoms:</Text>
                <SelectionButton text={"Fever"} icon={thermometer}
                                 onPress={() => {}}/>
                <SelectionButton text={"Dry Cough"} icon={cough}
                                 onPress={() => {}}/>
                <SelectionButton text={"Shortness of Breath"} icon={wind}
                                 onPress={() => {}}/>
                <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 40, textAlign: 'center'}}>Seek Medical Attention:</Text>
                <SelectionButton text={"Trouble Breathing"} icon={lungs}
                                 onPress={() => {}}/>
                <SelectionButton text={"Persistent Pain"} icon={pain}
                                 onPress={() => {}}/>
                <SelectionButton text={"Pressure In Chest"} icon={heart}
                                 onPress={() => {}}/>
                <SelectionButton text={"Bluish Lips Or Face"} icon={lips}
                                 onPress={() => {}}/>
            </ScrollView>
        )
    }
}