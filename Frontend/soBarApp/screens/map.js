import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import { globalStyles } from '../styles/global';
import MapViewDirections from 'react-native-maps-directions';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const MapScreen = props => {
  return (
    <View>
      <View style={globalStyles.mapContainer}>
        <MapView style={globalStyles.map}
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

          <MapViewDirections 
          origin={{latitude: 43.2600052,longitude: -79.9277422}}
          destination={{latitude: 42.2600052,longitude: -78.9277422}}
          apikey={"AIzaSyDFPVM3Jf4ij9aGA321qSez86f7qMybF8c"}
          strokeWidth={3}
          strokeColor="hotpink"
          />
        </MapView>
      </View>
      <View style={globalStyles.buttonContainer}>
        <View style={globalStyles.button}><Button title="Home Page" color='grey' styles={{ position: 'absolute' }} onPress={() => props.onStart(false)} /></View>
      </View>
    </View>
  );
}

export default MapScreen;
