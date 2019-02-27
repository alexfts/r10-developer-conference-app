import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Speaker from './Speaker';
import gql from 'graphql-tag';

export default class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    return <Speaker speaker={navigation.getParam('speaker')} />;
  }
}
