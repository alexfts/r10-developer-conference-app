import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import About from './About';
import gql from 'graphql-tag';

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: 'Montserrat'
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

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
