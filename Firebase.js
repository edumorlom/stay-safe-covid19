import * as firebase from 'firebase';
import getLocalizedText from "./getLocalizedText";
import {NativeModules} from "react-native";
import firebaseAccount from './firebase_account'


export default class Firebase {

    constructor() {
        const config = firebaseAccount;
        if (!firebase.apps.length) firebase.initializeApp(config);
    }

    signUp = (email, phoneNumber, password, info) => {
        this.createUserWithEmailAndPassword(email, password).then(response => {
                this.saveUserInfo(response.user.uid, info).then(() => {
                    this.sendWelcomeSMS(info.fullName, info.phoneNumber).then(response => console.log("Text Message Sent Successfully!"));
            }, e => {alert("ERROR: Couldn't save user information!" + e)})
        }, e => {alert("ERROR: E-Mail is already associated with another account!");})
    };

    createUserWithEmailAndPassword = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

    storeObjectInDatabase = (uid, object) => {
        if (!uid) return;
        this.getUserInfo(uid).on('value', (snapshot) => {
            firebase.database().ref('users/' + uid).set({
                ...snapshot.val(),
                ...object
            });
        });
    };

    saveUserInfo = (uid, info) => {
        if (!uid) return;
        return firebase.database().ref('users/' + uid).set(info);

    };

    async sendWelcomeSMS(fullName, phoneNumber) {
        let deviceLanguage = 'ios' ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] : NativeModules.I18nManager.localeIdentifier
        phoneNumber = phoneNumber.substring(0, 2) === '+1' ? phoneNumber : '+1' + phoneNumber;
        let name = fullName.split(" ")[0];
        let message = getLocalizedText(deviceLanguage, 'welcomeSMS').replace("{NAME}", name);
            return await fetch(
                `https://us-central1-numom-57642.cloudfunctions.net/sendCustomSMS?phoneNumber=${phoneNumber}`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({message: message})
                }
            );
    }

    async getCoordinateFromAddress(address){
        return await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address.street} ${address.city} ${address.zipCode}&region=en&key=AIzaSyC1h21KHXZY31W7_TPx-NNGRTKbIweMOjY`,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
    }

    async getStatistics(){
        return await fetch(
            "https://api.covid19api.com/summary",
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
    }

    async getUSStatistics(){
            return await fetch(
                "https://rlp60sprib.execute-api.us-east-1.amazonaws.com/daily_reports/latest",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                }
            );
    }


    async getNews(language) {
        return await fetch(
            "http://newsapi.org/v2/everything?q=covid-19&sortBy=publishedAt&apiKey=e6380c02e81d4f2b8020bf7616ab47a2&language=" + language,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
    }

    getUserInfo = (uid) => firebase.database().ref('users/' + uid);

    getUsers = () => firebase.database().ref('users')
}


