import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Map from './Map';
import gql from 'graphql-tag';
import { Fonts } from '../../config/styles';

export default class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: Fonts.regular
    },
    headerTitleContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error </Text>;

          if (!loading && !error) return <Map data={data} />;
        }}
      </Query>
    );
  }
}
