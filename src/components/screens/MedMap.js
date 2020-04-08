import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import styles from '../../styles/styles';

const MedMap = () => {
  const state = {
    loc: [
      {name: 'hospital', latitude: 6.06494, longitude: 6.485},
      {name: 'hospital', latitude: 6.1494, longitude: 6.495},
      {name: 'hospital', latitude: 6.16494, longitude: 6.487},
      {name: 'hospital', latitude: 6.07494, longitude: 6.4385},
      {name: 'hospital', latitude: 6.08494, longitude: 6.3485},
    ],
    initialRegion: {
      latitude: 6.116178,
      longitude: 6.817433,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    },
  };
  const {loc, initialRegion} = state;
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 6.116178,
        longitude: 6.817433,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }}>
      <Circle
        center={{
          latitude: 6.116178,
          longitude: 6.817433,
        }}
        radius={1000}
        fillColor={'rgba(77, 187, 192, 0.5)'}
      />
      {}
    </MapView>
  );
};

export default MedMap;
