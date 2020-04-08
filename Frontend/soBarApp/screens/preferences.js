import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const preferences = props => {
    const [enteredpref, setEnteredPref] = useState('');

    const prefInputHandler = (enteredText) => {
        setEnteredPref(enteredText);
    };

    const addPrefHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View>
                <TextInput 
                    placeholder="Preference"
                    onChangeText={prefInputHandler}
                    value={enteredpref}
                />
            </View>
        </Modal>
    )
}

export default preferences;