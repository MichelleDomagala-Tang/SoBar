import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/global';
const HomeScreen = props => {
    return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen!</Text>
        <View style={globalStyles.buttonContainer} >
            <Button title="Map Screen" onPress={() => props.onStart}>Open Map</Button>
        </View>
    </View>
    );
};

export default HomeScreen;