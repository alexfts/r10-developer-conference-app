import React from 'react';
import { StatusBar } from 'react-native';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from '../js/navigation/RootStackNavigator.js';
import { FavouritesProvider } from './context';
export default () => {
  StatusBar.setBarStyle('light-content');
  return (
    <ApolloProvider client={client}>
      <FavouritesProvider>
        <AppNavigator />
      </FavouritesProvider>
    </ApolloProvider>
  );
};
