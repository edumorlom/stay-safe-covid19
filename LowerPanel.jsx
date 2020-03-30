import {View} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import LowerPanelSelection from "./LowerPanelSelection";
import FindHelp from "./FindHelp";
import UserInfo from "./UserInfo";
import LowerPanelHeader from "./LowerPanelHeader";
import Statistics from "./Statistics";
import Discover from "./Discover";

export default class LowerPanel extends React.Component {

    constructor(props) {
        super(props);
        this.goUp();
    }

    state = {panelStyle: {...appStyles.lowerPanel}};

    transition = null;

    goUp = () => {
        clearInterval(this.transition);
        this.transition = setInterval( () => {
            let panelStyle = {...appStyles.lowerPanel};
            panelStyle["bottom"] = this.state.panelStyle.bottom + 25;

            if (this.state.panelStyle.bottom >= 0) {
                clearInterval(this.transition);
                panelStyle["bottom"] = 0;
            }

            this.setState({panelStyle: panelStyle});
        }, 0.1);
    };

    goDown = () => {
        clearInterval(this.transition);
        this.transition = setInterval( () => {
            let panelStyle = {...appStyles.lowerPanel};
            panelStyle["bottom"] = this.state.panelStyle.bottom - 25;

            if (this.state.panelStyle.bottom <= appStyles.lowerPanel.bottom) {
                clearInterval(this.transition);
                panelStyle["bottom"] = appStyles.lowerPanel.bottom;
            }

            this.setState({panelStyle: panelStyle});
        }, 0.1);
    };

    showContent = () => {
        if (this.props.lowerPanelContent === 'findHelp') {
            return <FindHelp users={this.props.users.filter(user => user.sick !== this.props.sick)}
                             setUserToView={this.props.setUserToView}
                             setLowerPanelContent={this.props.setLowerPanelContent} getLocalizedText={this.props.getLocalizedText}/>
        } else if (this.props.lowerPanelContent === 'userInfo'){
            return <UserInfo user={this.props.userToView} setLowerPanelContent={this.props.setLowerPanelContent} getLocalizedText={this.props.getLocalizedText}/>
        } else if (this.props.lowerPanelContent === 'discover') {
            return <Discover statistics={this.props.statistics} users={this.props.users} setLowerPanel={this.props.setLowerPanelContent}/>
        } else if (this.props.lowerPanelContent === 'statistics'){
            return <Statistics statistics={this.props.statistics} users={this.props.users} setLowerPanel={this.props.setLowerPanelContent}/>
        } else {
            return <LowerPanelSelection fullName={this.props.fullName}
                                        sick={this.props.sick}
                                        logout={this.props.logout}
                                        setFullPanel={this.props.setFullPanel}
                                        fullPanel={this.props.fullPanel}
                                        setLowerPanelContent={this.props.setLowerPanelContent}
                                        getLocalizedText={this.props.getLocalizedText}/>
        }
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.fullPanel && !this.props.fullPanel) {
            this.goDown()
        } else if (!prevProps.fullPanel && this.props.fullPanel){
            this.goUp()
        }
    }

    render() {
        let title = '';
        if (this.props.lowerPanelContent === 'findHelp' || this.props.lowerPanelContent === 'userInfo') title = 'Find Help';
        if (this.props.lowerPanelContent === 'volunteer') title = 'Volunteer';
        if (this.props.lowerPanelContent === 'discover') title='Discover';
        if (this.props.lowerPanelContent === 'statistics') title = 'Statistics';

        return (
            <View style={{...this.state.panelStyle, overflow: 'hidden'}}>
                {this.props.lowerPanelContent !== 'selection' && <LowerPanelHeader title={title} onPress={this.props.goBack} getLocalizedText={this.props.getLocalizedText}/>}
                {this.showContent()}
            </View>
        )
    }
}