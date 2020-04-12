import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { globalStyles } from './styles/global';

import Home from './screens/home'
import Map from './screens/map'

global.pref = [];
global.route = [];

// @brief Displays current screen of mobile application
export default function App() {
  
  const [mapShow, setMapShow] = useState(false);
  let content = <Home onStart={changeMap} />;

  // @brief Changes the value of mapShow to bool
  // @param bool Boolean value to change mapShow to
  const changeMap = (bool) => {
    setMapShow(bool);
  };

  // @brief Displays map screen if mapShow is true
  //        or home screen if mapShow is false
  // @param mapShow Boolean value
  if (mapShow) {
    content = <Map onStart={changeMap} />;
  };
  if (!mapShow) {
    content = <Home onStart={changeMap} />;
  };

  // @brief Returns the display of content
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