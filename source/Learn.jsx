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


export default function Learn(props) {
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
            <Text style={{...appStyles.paragraphText, color: appStyles.redColor, marginBottom: 30, marginTop: 10}}>{props.getLocalizedText("doTheseFiveSteps") + ":"}</Text>
            <SelectionButton text={props.getLocalizedText("washHands")} icon={numberOne}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("coughElbow")} icon={numberTwo}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("dontTouchFace")} icon={numberThree}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("keepSafeDistance")} icon={numberFour}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("stayAtHome")} icon={numberTwo}
                             onPress={() => {}}/>
            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>{props.getLocalizedText("howItSpreads") + ':'}</Text>
            <SelectionButton text={props.getLocalizedText("closeContact")} icon={hands}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("nearbyCoughs")} icon={coughing}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("nearbySneezes")} icon={sneezing}
                             onPress={() => {}}/>


            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>{props.getLocalizedText('peopleAtHigherRisk') + ':'}</Text>
            <SelectionButton text={props.getLocalizedText("elderly")} icon={elderPerson}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("inNursingHomes")} icon={home}
                             onPress={() => {}}/>
            <SelectionButton text={props.getLocalizedText("weakImmuneSystem")} icon={bloodCells}
                             onPress={() => {}}/>

            <Text style={{
                ...appStyles.paragraphText,
                color: appStyles.blueColor,
                marginBottom: 30,
                marginTop: 40,
                textAlign: 'center'}}>{props.getLocalizedText("officialSources") + ':'}</Text>
            <SelectionButton text={props.getLocalizedText("goToSite")} icon={cdcLogo}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.cdc.gov/");
                             }}/>
            <SelectionButton text={props.getLocalizedText("goToSite")} icon={whoIcon}
                             onPress={() => {
                                 Haptics.selectionAsync().then();
                                 Linking.openURL("https://www.who.int");
                             }}/>
        </ScrollView>
    )
}