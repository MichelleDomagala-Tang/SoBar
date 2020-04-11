import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import BarsHTTP from '../http_bars.js';

import Preferences from '../screens/preferences'


// @brief Defines the Home Screen
const HomeScreen = props => {

    const [modalVisible, setModalVisible] = useState(false);

    // @brief Method sets modal display to false
    const cancelPrefHandler = () => {
        setModalVisible(false);
    };

    // @brief Returns view for Home Screen
    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <View style={globalStyles.button}><Button title="Preferences" onPress={() => setModalVisible(true)} color='grey' /></View>
                <View style={globalStyles.button}><Button title="Find Route" onPress={() => props.onStart(true)} color='grey' /></View>
            </View>
            <Preferences visible={modalVisible}
                onAddPref={cancelPrefHandler}
                onCancel={cancelPrefHandler} />
            <Text style={globalStyles.titleText} >Bars in the Area:</Text>
        <BarsHTTP />
            <ScrollView>
                <View style={globalStyles.inputContainer}>
                    <Text>This is where the bars and button options are displayed</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;