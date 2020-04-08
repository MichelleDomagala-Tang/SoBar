import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {

  let content = <Home />;

  return (
    <View>
      {content}
    </View>
  )
}
