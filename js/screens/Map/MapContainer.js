import React, { Component } from 'react';
import Map from './Map';
import { getNavigationOptions } from '../../config/styles';

export default class MapContainer extends Component {
  static navigationOptions = getNavigationOptions('Map');

  render() {
    return (
      <Map
        latitude={49.263387}
        longitude={-123.138176}
        title={'RED Academy'}
        description={'1490 W Broadway #200, Vancouver, BC V6H 4E8'}
      />
    );
  }
}
