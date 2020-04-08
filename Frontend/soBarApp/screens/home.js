import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Transformation } from 'react-native';
import { globalStyles } from '../styles/global';

import Preferences from '../screens/preferences'

const HomeScreen = props => {

    const [pref, setpref] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const selectPref = prefTitle => {
        setpref(currentPref => [...pref, { key: Math.random().toString(), value: prefTitle }])
        setModalVisible(false);
    }

    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <Button title="Preferences" style={globalStyles.button} onPress={() => setModalVisible(true)} color='grey' />
                <Button title="Find Route" style={globalStyles.button} onPress={() => props.onStart} color='grey' />
                <Preferences visible={modalVisible} />
            </View>
        </View>
    );
};

export default HomeScreen;