import React from "react";
import RegionStatisticsButton from "./RegionStatisticsButton";

export default function USStatistics(props) {
    let sortedRegions = props.statistics.slice(1, -1).sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).splice(0, 200);
    let regionStatistics = sortedRegions.map((country, key) => <RegionStatisticsButton key={key} onPress={() => {}} country={country}/>);
    return (
        <React.Fragment>
            {regionStatistics}
        </React.Fragment>
    )

}