import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import About from './About';
import gql from 'graphql-tag';
import { getNavigationOptions } from '../../config/styles';

export default class AboutContainer extends Component {
  static navigationOptions = getNavigationOptions('About');

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

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
