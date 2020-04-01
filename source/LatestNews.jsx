import React from 'react';
import {ScrollView} from "react-native";
import appStyles from "../AppStyles";
import Firebase from "../Firebase";
import NewsButton from "./NewsButton";


export default class Learn extends React.Component {

    constructor(props) {
        super(props);
        let fb = new Firebase();
        fb.getNews('en').then(r => r.json().then(r => this.setState({news: r.articles})))
    }


    state = {news: []};

    render() {
        let newsButtons = this.state.news.map(news => <NewsButton title={news.title} url={news.url} timestamp={news.publishedAt}/>);
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center', width: appStyles.win.width}}>
                {newsButtons}
            </ScrollView>
        )
    }
}