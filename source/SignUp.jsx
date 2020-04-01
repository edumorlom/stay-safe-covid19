import React from "react";
import SignUpInfo from "./SignUpInfo";
import Introduction from "./Introduction";
import SignUpPassword from "./SignUpPassword";
import SignUpGender from "./SignUpGender";
import Firebase from "../Firebase";
import SignUpContact from "./SignUpContact";
import SignUpLoading from "./SignUpLoading";
import SignUpAddress from "./SignUpAddress";
import SignUpResults from "./SignUpResults";
import COVIDExam from "./COVIDExam";


export default class SignUp extends React.Component {
    state = {status: 'signup', index: 0, email: null, phoneNumber: null, password: null, fullName: null, age: null, fever: false, arouse: false, troubleBreathing: false, persistentPain: false, pressureChest: false,
        confusion: false, cough: false, sick: false, contactCOVID: false, thinkCOVID: false, coordinate: {latitude: 0, longitude: 0}, healthStatus: 'mild'};

    getNextScreen = () => {
        if (this.state.troubleBreathing || this.state.persistentPain || this.state.pressureChest || this.state.confusion || this.state.arouse){
            this.setState({healthStatus: 'extreme', sick: true} )
        }  else if (this.state.fever || this.state.cough || this.state.contactCOVID || this.state.thinkCOVID){
            this.setState({healthStatus: 'mild', sick: true})
        } else {
            this.setState({healthStatus: 'healthy', sick: false})
        }

        let currentIndex = this.state.index;
        if (currentIndex < this.screens.length - 1) currentIndex++;
        this.setState({index: currentIndex})
    };

    getResults = () => {
        this.setState({status: 'results'});
    };

    setUserInfo = (keyToValue) => {
        this.setState(keyToValue);
    };

    enableDisable = (key) => {
        console.log(key);
        this.setState({[key]: !this.state[key]})
    };

    LogIn = () => {
        this.props.login(this.state.email, this.state.password)
    };

    signUp = () => {
        let fb = new Firebase(this.props.deviceLanguage);
        fb.signUp(this.state.email, this.state.phoneNumber, this.state.password, this.state);
    };

    convertAddressToCoordinates = (address) => {
        let fb = new Firebase();
        let promise = fb.getCoordinateFromAddress(address);
        promise.then(res => res.json().then(res => this.setState({coordinate: {latitude: res.results[0].geometry.location.lat, longitude: res.results[0].geometry.location.lng}})))
    };

    screens = [
        <Introduction setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} getLocalizedText={this.props.getLocalizedText}/>,
        <COVIDExam getNextScreen={this.getNextScreen} setUserInfo={this.enableDisable} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpInfo setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpAddress setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} convertAddressToCoordinates={this.convertAddressToCoordinates} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpContact setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpPassword setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpGender setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen} getLocalizedText={this.props.getLocalizedText}/>,
        <SignUpLoading getResults={this.getResults} getLocalizedText={this.props.getLocalizedText} signUp={this.signUp}/>
    ];

    render() {
        if (this.state.status === 'signup') return (this.screens[this.state.index]);
        else if (this.state.status === 'results') return <SignUpResults healthStatus={this.state.healthStatus} LogIn={this.LogIn} getLocalizedText={this.props.getLocalizedText}/>
    }
};
