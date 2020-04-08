import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import Home from './screens/home'
import Map from './screens/map'

export default function App() {

  let content = <Home onStart={changeMap} />;

  const changeMap = () => {
    content = <Map />;
  };

  return (
    <View>
      {content}
    </View>
  )
}