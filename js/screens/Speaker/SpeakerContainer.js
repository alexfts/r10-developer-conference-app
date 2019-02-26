import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Speaker from './Speaker';
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

          if (!loading && !error) return <Speaker data={data} />;
        }}
      </Query>
    );
  }
}
