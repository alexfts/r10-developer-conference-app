import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Session from './Session';
import gql from 'graphql-tag';

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: 'Montserrat'
    }
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    return (
      <Query
        query={gql`
          query allSpeakers($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              name
              image
            }
          }
        `}
        variables={{ id: item.speaker.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error </Text>;

          return (
            <Session
              item={navigation.getParam('item')}
              speaker={data.allSpeakers[0]}
            />
          );
        }}
      </Query>
    );
  }
}
