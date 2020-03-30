import React from 'react';
import {ScrollView, Text, View, Image} from "react-native";
import Firebase from "./Firebase";
import AllCountriesStatistics from "./AllCountriesStatistics";
import USStatistics from "./USStatistics";
import appStyles from "./AppStyles";
import loading from './assets/loading.gif'






export default class Statistics extends React.Component {

    constructor(props) {
        super(props);
        let fb = new Firebase();
        fb.getUSStatistics().then(r => r.json().then(r => {
            this.setState({US: r.filter(region => {
                return region.Country_Region === 'US';
            }).map(region => {
                        return {Country: region.Combined_Key, TotalConfirmed: region.Confirmed, TotalDeaths: region.Deaths}
                })});
        }));
    }

    viewUS = () => {
        this.setState({wait: true});
        setTimeout(() => this.setState({wait: false}), 3000);
        this.setState({viewUS: true})
    };

    state = {US: [], positive: 0, negative: 0, viewUS: false, wait: false};

    render() {
        if (this.state.wait){
            return (
                <ScrollView contentContainerStyle={{alignItems: 'center', justifyItems: 'center', maxWidth: '100%'}}>
                    <Image source={loading} style={{height: 100, width: 100, marginTop: '40%'}}/>
                    <Text style={{...appStyles.paragraphText, color: appStyles.blueColor}}>Please Wait...</Text>
                </ScrollView>
            )
        }
        if (this.state.viewUS){
            return (
                <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}>
                    <USStatistics statistics={this.state.US}/>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}>
                    <AllCountriesStatistics onPress={this.viewUS} statistics={this.props.statistics} positive={this.props.users.filter(user => user.sick).length} negative={this.props.users.filter(user => !user.sick).length}/>
                </ScrollView>
            )
        }
    }
}