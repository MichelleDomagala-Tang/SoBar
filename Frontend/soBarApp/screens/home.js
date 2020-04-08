import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Image, Transformation, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

import Preferences from '../screens/preferences'

const HomeScreen = props => {

    const [pref, setpref] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const addPrefHandler = prefTitle => {
        setpref(currentPref => [...pref, { key: Math.random().toString(), value: prefTitle }]);
        setModalVisible(false);
    };

    const removePrefHandler = prefId => {
        setpref(currentPref => {
            return currentPref.filter((pref) => pref.id !== prefId)
        })
    };

    const cancelPrefHandler = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <View style={globalStyles.button}><Button title="Preferences" style={globalStyles.button} onPress={() => setModalVisible(true)} color='grey' /></View>
                <View style={globalStyles.button}><Button title="Find Route" style={globalStyles.button} onPress={() => props.onStart} color='grey' /></View>    
            </View>
            <Preferences visible={modalVisible}
            onAddPref={addPrefHandler}
            onCancel={cancelPrefHandler} />
            <FlatList
            keyExtractor={(item, index) => item.id}
            data={pref}
            />
            
        </View>
    );
}

export default HomeScreen;