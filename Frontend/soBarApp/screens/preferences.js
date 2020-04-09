import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

const preferences = props => {
    //const [enteredpref, setEnteredPref] = useState('');

    //const prefInputHandler = (enteredText) => {
      //  setEnteredPref(enteredText);
    //};

    const addPrefHandler = () => {
        props.onAddPref();
        //setEnteredPref('');
    };

    const cancelGoalHandler = () => {
        props.onCancel();
        //setEnteredPref('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={globalStyles.screen}>
            <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
            <View style={globalStyles.inputContainer}>
                <ScrollView>
                    <View style={globalStyles.preference}>
                        <Text>Karaoke?  </Text>
                        <Button title="+" color='#7BD6A8' onPress={() => {}}/>
                    </View>
                    <View style={globalStyles.preference}>
                        <Text>Live Music?  </Text>
                        <Button title="+" color='#7BD6A8' onPress={() => {}}/>
                    </View>
                    <View style={globalStyles.preference}>
                        <Text>Food Available?  </Text>
                        <Button title="+" color='#7BD6A8' onPress={() => {}}/>
                    </View>
                </ScrollView>
                <View style={globalStyles.buttonContainer} >
                    <View style={globalStyles.button}><Button title="CONFIRM" color="grey" onPress={addPrefHandler} /></View>
                </View>
            </View>
            </View>
        </Modal>
    )
}

export default preferences;