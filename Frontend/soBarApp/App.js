import React, { useState } from 'react';
import { View, Text, Button, Modal, Image } from 'react-native';
import { globalStyles } from './styles/global';

import Home from './screens/home'
import Map from './screens/map'

export default function App() {

  let content = <Home onStart={changeMap} />;

  const changeMap = () => {
    content = <Map />;
  };

  return (
    <View>
      <View style={globalStyles.header}>
        <Image source={require('./logo.png')} style={globalStyles.logo} />
      </View>
      <View>
        {content}
      </View>
    </View>
  )
}