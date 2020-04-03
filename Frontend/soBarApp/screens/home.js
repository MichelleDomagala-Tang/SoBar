import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import homeStack from '../routes/homeStack';

export default function Home() {
    return (
        <View styles={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}