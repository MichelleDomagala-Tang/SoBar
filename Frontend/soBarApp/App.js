import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { globalStyles } from './styles/global';

import Home from './screens/home'
import Map from './screens/map'

export default function App() {

  
  const changeMap = (a) => {
    setMapShow(a);
  };
  
  const [mapShow, setMapShow] = useState(false);
  let content = <Home onStart={changeMap} />;


  if (mapShow) {
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