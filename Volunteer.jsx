import React from 'react';
import {ScrollView, Text} from "react-native";
import Button from "./Button";
import Firebase from "./Firebase";
import appStyles from './AppStyles'




export default class Volunteer extends React.Component {

    constructor(props) {
        super(props);
        let fb = new Firebase();
        fb.getUserInfo(this.props.uid).on('value', (snapshot) => {
            this.setAppState({volunteer: snapshot.val() || false});
        });
    }

    setVolunteer() {
        let fb = new Firebase();
        let volunteer = !this.state.volunteer;
        this.setState({volunteer: volunteer});
        fb.storeObjectInDatabase({volunteer: volunteer})
    }

    state = {volunteer: null};

    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%', justifyContent: 'center'}}>
                <Text style={{
                    fontSize: 21,
                    color: appStyles.blueColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 30,
                    marginBottom: 0
                }}>Help those who show symptoms to with things such as:</Text>
                <Text style={{
                    fontSize: 21,
                    color: appStyles.greyColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 5,
                    marginBottom: 0
                }}>Shopping</Text>
                <Text style={{
                    fontSize: 21,
                    color: appStyles.greyColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 5,
                    marginBottom: 0
                }}>Walking the Dog</Text>
                <Text style={{
                    fontSize: 21,
                    color: appStyles.greyColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 5,
                    marginBottom: 0
                }}>Deliveries</Text>
                <Text style={{
                    fontSize: 21,
                    color: appStyles.greyColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 5,
                    marginBottom: 100
                }}>Picks Ups</Text>
                <Button text={this.state.volunteer ? "Opt-Out From Volunteering" : "Opt-In To Volunteer" } onPress={() => {
                            this.setVolunteer();
                            alert("Great, thank you! We will share your profile to people around you.")
                        }}/>
            </ScrollView>
        )
    }
}