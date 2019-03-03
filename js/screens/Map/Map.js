import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import PropTypes from 'prop-types';

const Map = ({ latitude, longitude, title, description }) => (
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

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Map;
