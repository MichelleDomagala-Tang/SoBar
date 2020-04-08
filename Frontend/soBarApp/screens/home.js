import React from 'react';
import { View, Text, StyleSheet, Button, Image, Transformation } from 'react-native';
import { globalStyles } from '../styles/global';

const HomeScreen = props => {
    return (
    <View>
        <View style={globalStyles.header}>
            <Image source={require('../logo.png')} style={globalStyles.logo} />
        </View>
    </View>
    );
};

export default HomeScreen;