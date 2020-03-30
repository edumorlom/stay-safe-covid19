import React from 'react';
import {ScrollView} from "react-native";
import VolunteerSelectionButton from "./UserSelectionButton";
import hot from './hot.png'
import help from './help.png'





export default function FindHelp(props) {
    let usersButton = props.users.map((user, key) =>
        <VolunteerSelectionButton key={key}
                                  icon={user.sick ? hot : help}
                                  onPress={() => {
                                    props.setUserToView(user);
                                    props.setLowerPanelContent('userInfo');
                                  }
    } user={user}/>);

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}>
            {usersButton}
        </ScrollView>
    )
}