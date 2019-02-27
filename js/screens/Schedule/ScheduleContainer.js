import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Schedule from './Schedule';
import gql from 'graphql-tag';
import { formatSessionData } from './dataFormatHelpers';
export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
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

          if (!loading && !error)
            return <Schedule data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}
