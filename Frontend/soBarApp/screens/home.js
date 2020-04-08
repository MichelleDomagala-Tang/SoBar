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
    </View>
    );
};

export default HomeScreen;