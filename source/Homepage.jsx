import React from 'react';
import Map from "./Map";
import {View} from 'react-native';
import LowerPanel from "./LowerPanel";
import SOSButton from "./SOSButton";
import appStyles from "../AppStyles";
import Firebase from "../Firebase";



export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.getCurrentLocation();
        this.getUsers();
        this.getStatistics();
    }


    state = {fullPanel: true, users: [], userToView: null, statistics: [], lowerPanelContent: 'selection', currentLocation: null};

    getCurrentLocation = () => {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let currentLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            this.setState({currentLocation: currentLocation});
        }, (error) => console.log(error));
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    setFullPanel = (fullPanel) => {
        this.setState({fullPanel: fullPanel})
    };

    setUserToView = (user) => {
        this.setState({userToView: user})
    };

    getUsers = () => {
        let fb = new Firebase(this.props.deviceLanguage);
        fb.getUsers().on("child_added", (snapshot) => {
            this.state.users = [...this.state.users, snapshot.val()];
            this.setState({users: this.state.users})
        });
    };

    getStatistics = () => {
        let fb = new Firebase(this.props.deviceLanguage);
        fb.getStatistics().then(res => res.json().then(res => console.log(this.setState({statistics: res.Countries}))))
    };


    setLowerPanelContent = (lowerPanelContent) => {
        this.setState({lowerPanelContent: lowerPanelContent});
    };

    goBack = () => {
        if (this.state.lowerPanelContent !== 'selection') {
            if (this.state.lowerPanelContent === 'findHelp') this.setLowerPanelContent('selection');
            if (this.state.lowerPanelContent === 'userInfo') this.setLowerPanelContent('findHelp');
            if (this.state.lowerPanelContent === 'discover') this.setLowerPanelContent('selection');
            if (this.state.lowerPanelContent === 'symptoms') this.setLowerPanelContent('discover');
            if (this.state.lowerPanelContent === 'learn') this.setLowerPanelContent('discover');
            if (this.state.lowerPanelContent === 'news') this.setLowerPanelContent('discover');
            if (this.state.lowerPanelContent === 'statistics') this.setLowerPanelContent('selection');

        }
    };


    render() {
        return (
            <View style={appStyles.container}>
                <Map onPress={() => this.setFullPanel(false)}
                      userToView={this.state.userToView}
                      setUserToView={this.setUserToView}
                      users={this.state.users}
                      currentLocation={this.state.currentLocation}
                      getLocalizedText={this.props.getLocalizedText}/>
                <SOSButton/>
                <LowerPanel setFullPanel={this.setFullPanel}
                            fullPanel={this.state.fullPanel}
                            fullName={this.props.fullName}
                            sick={this.props.sick}
                            logout={this.props.logout}
                            uid={this.props.uid}
                            users={this.state.users}
                            statistics={this.state.statistics}
                            userToView={this.state.userToView}
                            setUserToView={this.setUserToView}
                            lowerPanelContent={this.state.lowerPanelContent}
                            goBack={this.goBack}
                            setLowerPanelContent={this.setLowerPanelContent}
                            getLocalizedText={this.props.getLocalizedText}
                            deviceLanguage={this.props.deviceLanguage}/>
            </View>
        )
    }
}