import React from 'react';
import {ScrollView} from "react-native";
import Learn from './Learn'
import SelectionButton from "./SelectionButton";
import washingHands from "../assets/washing-hands.png";
import blood from "../assets/blood.png";
import newspaperIcon from "../assets/news.png";
import appStyles from "../AppStyles";
import News from './News'
import Symptoms from "./Symptoms";


export default function Discover(props) {
    if (props.lowerPanelContent === 'discover') {
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
                <SelectionButton text={props.getLocalizedText("symptoms")} icon={blood}
                                 onPress={() => props.setLowerPanelContent('symptoms')}/>
                <SelectionButton text={props.getLocalizedText("learn")} icon={washingHands}
                                 onPress={() => props.setLowerPanelContent('learn')}/>
                <SelectionButton text={props.getLocalizedText("news")} icon={newspaperIcon}
                                 onPress={() => props.setLowerPanelContent('news')}/>
            </ScrollView>
        )
    } else if (props.lowerPanelContent === 'symptoms') {
        return <Symptoms getLocalizedText={props.getLocalizedText}/>
    } else if (props.lowerPanelContent === 'learn') {
        return <Learn getLocalizedText={props.getLocalizedText}/>
    } else if (props.lowerPanelContent === 'news') {
        return <News getLocalizedText={props.getLocalizedText} deviceLanguage={props.deviceLanguage}/>
    }
}