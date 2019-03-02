import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default ({ latitude, longitude, title, description }) => (
  <MapView
    style={styles.map}
    region={{
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
  >
    <Marker
      coordinate={{ latitude, longitude }}
      title={title}
      description={description}
      image={require('../../assets/images/map_pin.png')}
    />
  </MapView>
);
