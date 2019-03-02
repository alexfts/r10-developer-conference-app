import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Schedule from './Schedule';
import gql from 'graphql-tag';
import { formatSessionData } from '../../lib/dataFormatHelpers';
import FavouritesContext from '../../context';
import { getNavigationOptions } from '../../config/styles';
export default class ScheduleContainer extends Component {
  static navigationOptions = getNavigationOptions('Schedule');

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
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
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error </Text>;

          return (
            <FavouritesContext.Consumer>
              {({ faveIds, removeFave, saveFave }) => {
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
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
