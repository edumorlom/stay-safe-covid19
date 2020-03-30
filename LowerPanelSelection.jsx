import React from 'react';
import book from "./book.png";
import volunteer from "./volunteer.png";
import statistics from "./graph.png";
import HelloBanner from "./HelloBanner";
import SelectionButton from "./SelectionButton";
import GestureRecognizer from "react-native-swipe-gestures";


export default function LowerPanelSelection(props) {
    return (
        <GestureRecognizer
            onSwipeUp={() => props.setFullPanel(true)}
            onSwipeDown={() => props.setFullPanel(false)}
            config={{velocityThreshold: 0.4, directionalOffsetThreshold: 100}}
            style={{width: '100%', height: '100%', paddingTop: '10%' , alignItems: 'center'}}>
            <HelloBanner fullName={props.fullName} logout={props.logout} getLocalizedText={props.getLocalizedText}/>
            <SelectionButton text={props.sick ? props.getLocalizedText("findHelp"): props.getLocalizedText("volunteer")} icon={volunteer}
                             onPress={() => {props.setLowerPanelContent('findHelp')}}/>
            <SelectionButton text={props.getLocalizedText("discover")} icon={book}
                             onPress={() => {props.setLowerPanelContent('discover')}}/>
            <SelectionButton text={props.getLocalizedText("statistics")} icon={statistics}
                             onPress={() => {props.setLowerPanelContent('statistics')}}/>
        </GestureRecognizer>
    )
}