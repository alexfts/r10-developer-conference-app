import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Session from './Session';
import gql from 'graphql-tag';

export default class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;
    return <Session item={navigation.getParam('item')} />;
  }
}
