import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { globalStyles } from '../styles/global';

const preferences = props => {
    const [enteredpref, setEnteredPref] = useState('');

    const prefInputHandler = (enteredText) => {
        setEnteredPref(enteredText);
    };

    const addPrefHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredPref('');
    };

    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredPref('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View>
                <TextInput 
                    placeholder="Preference"
                    onChangeText={prefInputHandler}
                    value={enteredpref}
                />
                <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
                <View style={globalStyles.buttonContainer} >
                    <View style={globalStyles.button}><Button title="ADD" color="grey" onPress={prefInputHandler} /></View>
                </View>
            </View>
        </Modal>
    )
}

export default preferences;