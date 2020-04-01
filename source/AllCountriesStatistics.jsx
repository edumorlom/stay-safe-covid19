import React from "react";
import SelfReportedStatistics from "./SelfReportedStatistics";
import RegionStatisticsButton from "./RegionStatisticsButton";

export default function AllCountriesStatistics(props) {
    let sortedCountries = props.statistics.slice(1, -1).sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    let countriesStatistics = sortedCountries.map((country, key) => <RegionStatisticsButton key={key} onPress={() => props.onPress()} country={country} getLocalizedText={props.getLocalizedText}/>);
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
            <SelfReportedStatistics getLocalizedText={props.getLocalizedText} positive={props.positive} negative={props.negative} onPress={() => {}}/>
            <RegionStatisticsButton onPress={() => {}}
                                    getLocalizedText={props.getLocalizedText}
                                    country={{
                                        Country: props.getLocalizedText("allCountries"),
                                        TotalConfirmed: TotalConfirmed,
                                        TotalDeaths: TotalDeaths,
                                        NewDeaths: NewDeaths}}/>
            {countriesStatistics}
        </React.Fragment>
    )

}