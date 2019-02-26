import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Schedule from './Schedule';
import gql from 'graphql-tag';

export default class FavesContainer extends Component {
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

          if (!loading && !error) return <Schedule data={data} />;
        }}
      </Query>
    );
  }
}
