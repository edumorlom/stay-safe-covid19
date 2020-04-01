import React from 'react';
import MapView, {Circle} from 'react-native-maps';
import appStyles from '../AppStyles'

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.currentLocation) this.setState({currentRegion: {...this.props.currentLocation, latitudeDelta: 0.0922, longitudeDelta: (appStyles.win.width / appStyles.win.height) * 0.0922}})
    }


    state = {
        currentRegion: {
            latitude: 25.659,
            longitude: -80.163,
            latitudeDelta: 0.0922,
            longitudeDelta: (appStyles.win.width / appStyles.win.height) * 0.1,
        }
    };

    setCurrentRegion  = (region) => {
        this.setState({currentRegion: null});
    };

    render() {
        return (
            <MapView
                onPress={this.props.onPress}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
                zoomEnabled={true}
                onRegionChange={this.setCurrentRegion}
                showsUserLocation={true}
                region={this.state.currentRegion}>
                {this.props.users.map((user, index) =>
                    <Circle key={index} center={{longitude: user.coordinate.longitude + 0.001, latitude: user.coordinate.latitude + 0.001}} strokeWidth={0.01} radius={200} fillColor={user.sick ? "rgba(181,38,48,0.5)" : "rgba(0,144,81,0.5)"}/>)}
            </MapView>
        )
    }
}