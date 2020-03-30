import {Image, ScrollView, Text, View} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import miamiImage from "./assets/virus.png";
import Button from "./Button";
import SelfReportedStatistics from "./SelfReportedStatistics";
import RegionStatisticsButton from "./RegionStatisticsButton";

export default function AllCountriesStatistics(props) {
    let sortedCountries = props.statistics.slice(1, -1).sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    let countriesStatistics = sortedCountries.map((country, key) => <RegionStatisticsButton key={key} onPress={() => props.onPress()} country={country}/>);
    let TotalConfirmed = 0;
    let TotalDeaths = 0;
    let NewDeaths = 0;

    sortedCountries.forEach((country => {
        TotalConfirmed += country.TotalConfirmed;
        TotalDeaths += country.TotalDeaths;
        NewDeaths += country.NewDeaths;
    }));

    return (
        <React.Fragment>
            <SelfReportedStatistics positive={props.positive} negative={props.negative} onPress={() => {}}/>
            <RegionStatisticsButton onPress={() => {}}
                                    country={{
                                        Country: 'All Countries',
                                        TotalConfirmed: TotalConfirmed,
                                        TotalDeaths: TotalDeaths,
                                        NewDeaths: NewDeaths}}/>
            {countriesStatistics}
        </React.Fragment>
    )

}