import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Faves from './Faves';
import gql from 'graphql-tag';
import FavouritesContext from '../../context';
import { formatSessionData } from '../../lib/dataFormatHelpers';
import { getNavigationOptions } from '../../config/styles';

export default class FavesContainer extends Component {
  static navigationOptions = getNavigationOptions('Faves');

  render() {
    return (
      <FavouritesContext.Consumer>
        {({ faveIds, removeFave, saveFave }) => (
          <Query
            query={gql`
              query allSessions($ids: [ID!]) {
                allSessions(filter: { id_in: $ids }) {
                  description
                  id
                  location
                  startTime
                  title
                  speaker {
                    id
                  }
                }
              }
            `}
            variables={{ ids: faveIds }}
          >
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>Error </Text>;

              return (
                <Faves
                  data={formatSessionData(data.allSessions)}
                  faveIds={faveIds}
                  removeFave={removeFave}
                  saveFave={saveFave}
                />
              );
            }}
          </Query>
        )}
      </FavouritesContext.Consumer>
    );
  }
}
