import {ScrollView, Text, View} from 'react-native';
import React from "react";
import appStyles from './AppStyles'
import Button from "./Button";
import COVIDExamSelectionButton from "./COVIDExamSelectionButton";

export default function COVIDExam(props) {

    return (
        <ScrollView>
            <View style={appStyles.container}>
            <View style={{
                paddingTop: appStyles.win.height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={appStyles.titleRed}>{props.getLocalizedText('covidExam')}</Text>
                <Text style={appStyles.paragraphText}>{props.getLocalizedText('selectAllApply')}</Text>
            </View>
            <View style={{paddingTop: appStyles.win.height * 0.03}}>
                    <COVIDExamSelectionButton title={props.getLocalizedText('selfDiagnosed')}
                                              description={props.getLocalizedText('selfDiagnosedDescription')}
                                              onPress={() => props.setUserInfo('thinkCOVID')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('contact')}
                                              description={props.getLocalizedText('contactDescription')}
                                              onPress={() => props.setUserInfo('contactCOVID')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('cough')}
                                              description={props.getLocalizedText('coughDescription')}
                                              onPress={() => props.setUserInfo('cough')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('fever')}
                                              description={props.getLocalizedText('feverDescription')}
                                              onPress={() => props.setUserInfo('fever')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('troubleBreathing')}
                                              description={props.getLocalizedText('troubleBreathingDescription')}
                                              onPress={() => props.setUserInfo('troubleBreathing')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('persistentPain')}
                                              description={props.getLocalizedText('persistentPainDescription')}
                                              onPress={() => props.setUserInfo('persistentPain')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('pressureChest')}
                                              description={props.getLocalizedText('pressureChestDescription')}
                                              onPress={() => props.setUserInfo('pressureChest')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('arouse')}
                                              description={props.getLocalizedText('arouseDescription')}
                                              onPress={() => props.setUserInfo('arouse')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('bluish')}
                                              description={props.getLocalizedText('bluishDescription')}
                                              onPress={() => props.setUserInfo('bluish')}/>
                    <COVIDExamSelectionButton title={props.getLocalizedText('confusion')}
                                              description={props.getLocalizedText('confusionDescription')}
                                              onPress={() => props.setUserInfo('confusion')}/>

            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                marginBottom: 30
            }}>
                <Button text={props.getLocalizedText('continueButton')} onPress={props.getNextScreen}/>
            </View>
            </View>
        </ScrollView>
    );
}
