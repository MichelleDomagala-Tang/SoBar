import React from 'react';
import { View, Text, StyleSheet, Button, Image, Transformation } from 'react-native';
import { globalStyles } from '../styles/global';

const HomeScreen = props => {
    return (
    <View>
        <View style={globalStyles.buttonContainer} >
            <Button title="Map" onPress={() => props.onStart} color='grey'/>
            <Button title="Map Screen" onPress={() => props.onStart} color='grey' />
        </View>
    </View>
    );
};

export default HomeScreen;