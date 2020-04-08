import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>

      <MapView style={styles.map}
          region={{
            latitude: 43.2600052,
            longitude: -79.9277422,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }} >
            <MapView.Marker
              coordinate={{
                latitude: 43.2600052,
                longitude: -79.9277422
              }}
              title={'free samples'}
              description={'jk its rona szn'}
              />

              

              <MapView.Marker
              coordinate={{
                latitude: 42.2600052,
                longitude: -78.9277422
              }}
              title={'Michelles feet'}
              description={'jk its rona szn'}
              />

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

  }
  

});
