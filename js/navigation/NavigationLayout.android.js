import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config';
import { NavigationOptions } from '../config/styles';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: { screen: ScheduleStack },
    Map: { screen: MapStack },
    Faves: { screen: FavesStack },
    About: { screen: AboutStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'About') {
          iconName = `md-information-circle`;
        } else if (routeName === 'Map') {
          iconName = `md-map`;
        } else if (routeName === 'Faves') {
          iconName = `md-heart`;
        } else {
          iconName = 'md-calendar';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    drawerBackgroundColor: '#000',
    contentOptions: NavigationOptions
  }
);
