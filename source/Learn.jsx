import React from 'react';
import {Linking, ScrollView, Text} from "react-native";
import appStyles from "../AppStyles";
import SelectionButton from "./SelectionButton";
import numberOne from "../assets/number-one.png";
import numberTwo from "../assets/number-two.png";
import numberThree from "../assets/number-three.png";
import numberFour from "../assets/number-four.png";
import numberFive from "../assets/number-five.png";
import cdcLogo from "../assets/cdc.png"
import whoIcon from '../assets/whoIcon.png'
import hands from '../assets/hands.png'
import coughing from '../assets/coughing.png'
import home from '../assets/home.png'
import sneezing from '../assets/sneezing.png'
import elderPerson from '../assets/elderly.png'
import bloodCells from '../assets/red-blood-cells.png'
import * as Haptics from "expo-haptics";


export default function Learn() {
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
            <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 10}}>Do these FIVE Steps:</Text>
            <SelectionButton text={"Wash Your Hands"} icon={numberOne}
                             onPress={() => {}}/>
            <SelectionButton text={"Cough Onto Your Elbow"} icon={numberTwo}
                             onPress={() => {}}/>
            <SelectionButton text={"Don't Touch Your Face"} icon={numberThree}
                             onPress={() => {}}/>
            <SelectionButton text={"Keep A Safe Distance"} icon={numberFour}
                             onPress={() => {}}/>
            <SelectionButton text={"Stay Home"} icon={numberFive}
                             onPress={() => {}}/>
            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>How It Spreads:</Text>
            <SelectionButton text={"Close Contact"} icon={hands}
                             onPress={() => {}}/>
            <SelectionButton text={"Nearby Coughs"} icon={coughing}
                             onPress={() => {}}/>
            <SelectionButton text={"Nearby Sneezes"} icon={sneezing}
                             onPress={() => {}}/>


            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>People At Higher Risk:</Text>
            <SelectionButton text={"Elderly"} icon={elderPerson}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.cdc.gov/");
                             }}/>
            <SelectionButton text={"In Nursing Homes"} icon={home}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.who.int");
                             }}/>
            <SelectionButton text={"Weak Immune System"} icon={bloodCells}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.who.int");
                             }}/>

            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>Official Sources:</Text>
            <SelectionButton text={"Go To Site"} icon={cdcLogo}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.cdc.gov/");
                             }}/>
            <SelectionButton text={"Go To Site"} icon={whoIcon}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.who.int");
                             }}/>
        </ScrollView>
    )
}