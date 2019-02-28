import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default ({ data }) => {
  return (
    <MapView
      style={{ ...styles.map, height: '100%', width: '100%' }}
      region={{
        latitude: 49.263387,
        longitude: -123.138176,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Marker
        coordinate={{ latitude: 49.263387, longitude: -123.138176 }}
        title="RED Academy"
        description="1490 W Broadway #200, Vancouver, BC V6H 4E8"
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};
