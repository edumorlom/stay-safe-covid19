import React from 'react';
import {ScrollView} from "react-native";
import UserSelectionButton from "./UserSelectionButton";
import hot from '../assets/hot.png'
import help from '../assets/help.png'





export default function FindHelp(props) {
    let usersButton = props.users.map((user, key) =>
        <UserSelectionButton key={key}
                             icon={user.sick ? hot : help}
                             getLocalizedText={props.getLocalizedText}
                             onPress={() => {
                                    props.setUserToView(user);
                                    props.setLowerPanelContent('userInfo');}
    } user={user}/>);

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}>
            {usersButton}
        </ScrollView>
    )
}