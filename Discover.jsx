import React from 'react';
import {ScrollView} from "react-native";
import Learn from './Learn'
import SelectionButton from "./SelectionButton";
import washingHands from "./washing-hands.png";
import blood from "./blood.png";
import news from "./news.png";
import appStyles from "./AppStyles";
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
                    <SelectionButton text={"Symptoms"} icon={blood}
                                     onPress={() => this.setContent('symptoms')}/>
                    <SelectionButton text={"Learn"} icon={washingHands}
                                     onPress={() => this.setContent('learn')}/>
                    <SelectionButton text={"News"} icon={news}
                                     onPress={() => this.setContent('news')}/>
                </ScrollView>
            )
        } else if (this.state.content === 'symptoms') {
            return <Symptoms/>
        } else if (this.state.content === 'learn') {
            return <Learn/>
        } else if (this.state.content === 'news'){
            return <News/>
        }
    }
}