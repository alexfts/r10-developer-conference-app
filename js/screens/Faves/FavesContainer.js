import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Faves from './Faves';
import gql from 'graphql-tag';
import FavouritesContext from '../../context';

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

          return (
            <FavouritesContext.Consumer>
              {({ faveIds, removeFave, saveFave }) => {
                return (
                  <Faves
                    data={data}
                    faveIds={faveIds}
                    removeFave={removeFave}
                    saveFave={saveFave}
                  />
                );
              }}
            </FavouritesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
