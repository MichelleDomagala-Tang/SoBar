import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { globalStyles } from './styles/global';

import Home from './screens/home'
import Map from './screens/map'
import Preferences from './screens/preferences'

export default function App() {
  const [pref, setpref] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  let content = <Home onStart={changeMap} />;

  const changeMap = () => {
    content = <Map />;
  };

  const selectPref = prefTitle => {
    setpref(currentPref => [...pref, { key: Math.random().toString(), value: prefTitle }])
    setModalVisible(false);
  }

  return (
    <View>
      <View style={globalStyles.buttonContainer} >
        <Button title="Preferences Button" style={globalStyles.button} onPress={() => setModalVisible(true)}>PREFERENCES</Button>
        <Button title="Find Route" style={globalStyles.button} onPress={() => props.onStart}>FIND ROUTE</Button>
        <Preferences visible={modalVisible} />
      </View>
      {content}
    </View>
  )
}