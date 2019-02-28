import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Faves from './Faves';
import gql from 'graphql-tag';
import FavouritesContext from '../../context';
import Schedule from '../Schedule/Schedule';
import { formatSessionData } from '../Schedule/dataFormatHelpers';

export default class FavesContainer extends Component {
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
                // <Schedule
                //   data={formatSessionData(data.allSessions)}
                //   faveIds={faveIds}
                //   removeFave={removeFave}
                //   saveFave={saveFave}
                // />
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
