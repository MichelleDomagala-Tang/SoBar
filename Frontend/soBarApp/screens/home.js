import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { globalStyles } from '../styles/global';

const HomeScreen = props => {
    return (
    <View>
        <View style={globalStyles.header}>
            <View style={globalStyles.logo}>
                <Image source={require('../logo.png')} />
            </View>
        </View>
        <View style={globalStyles.buttonContainer} >
            <Button title="Map" onPress={() => props.onStart}>Map Boi</Button>
            <Button title="Map Screen" onPress={() => props.onStart}>Open Map</Button>
        </View>
    </View>
    );
};

export default HomeScreen;