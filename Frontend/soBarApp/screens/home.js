import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { globalStyles } from '../styles/global';

import Preferences from '../screens/preferences'
import PrefItem from '../components/CheckItem'

const HomeScreen = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const addPrefHandler = () => {
        setModalVisible(false);
    };

    const cancelPrefHandler = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <View style={globalStyles.button}><Button title="Preferences" onPress={() => setModalVisible(true)} color='grey' /></View>
                <View style={globalStyles.button}><Button title="Find Route" onPress={() => props.onStart(true)} color='grey' /></View>
            </View>
            <Preferences visible={modalVisible}
                onAddPref={addPrefHandler}
                onCancel={cancelPrefHandler} />
            <Text style={globalStyles.titleText} >Bars in the Area:</Text>
            <ScrollView>
                <View style={globalStyles.inputContainer}>
                    <Text>This is where the bars and button options are displayed</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;