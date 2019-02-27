import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import About from './screens/About';
import Faves from './screens/Faves';
import Schedule from './screens/Schedule';
import Session from './screens/Session';
import Speaker from './screens/Speaker';
import AppNavigator from '../js/navigation/RootStackNavigator.js';
import { FavouritesProvider } from './context';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavouritesProvider>
          <AppNavigator />
        </FavouritesProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
