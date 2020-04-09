import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { globalStyles } from '../styles/global';

import Preferences from '../screens/preferences'
import PrefItem from '../components/PrefItem'

const HomeScreen = props => {

    //const [pref, setpref] = useState([]);
    //const [bars, setBars] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const addPrefHandler = () => {
        //setpref(currentPref => 
            //[...pref,
            //{ id: Math.random().toString(), value: prefTitle }]);
        setModalVisible(false);
    };

    //const removePrefHandler = prefId => {
       // setpref(currentPref => {
        //    return currentPref.filter((pref) => pref.id !== prefId)
        //});
   // };

    const cancelPrefHandler = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <View style={globalStyles.button}><Button title="Preferences" style={globalStyles.button} onPress={() => setModalVisible(true)} color='grey' /></View>
                <View style={globalStyles.button}><Button title="Find Route" style={globalStyles.button} onPress={() => props.onStart(true)} color='grey' /></View>
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