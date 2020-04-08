import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
