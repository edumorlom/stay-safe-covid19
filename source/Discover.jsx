import React from 'react';
import {ScrollView} from "react-native";
import Learn from './Learn'
import SelectionButton from "./SelectionButton";
import washingHands from "../assets/washing-hands.png";
import blood from "../assets/blood.png";
import news from "../assets/news.png";
import appStyles from "../AppStyles";
import News from './LatestNews'
import Symptoms from "./Symptoms";


export default class Discover extends React.Component {

    state = {content: 'selection'};

    setContent = (content) => {
        this.setState({content: content})
    };

    render() {
        if (this.state.content === 'selection'){
            return (
                <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
                    <SelectionButton text={this.props.getLocalizedText("symptoms")} icon={blood}
                                     onPress={() => this.setContent('symptoms')}/>
                    <SelectionButton text={this.props.getLocalizedText("learn")} icon={washingHands}
                                     onPress={() => this.setContent('learn')}/>
                    <SelectionButton text={this.props.getLocalizedText("news")} icon={news}
                                     onPress={() => this.setContent('news')}/>
                </ScrollView>
            )
        } else if (this.state.content === 'symptoms') {
            return <Symptoms getLocalizedText={this.props.getLocalizedText}/>
        } else if (this.state.content === 'learn') {
            return <Learn getLocalizedText={this.props.getLocalizedText}/>
        } else if (this.state.content === 'news'){
            return <News getLocalizedText={this.props.getLocalizedText}/>
        }
    }
}