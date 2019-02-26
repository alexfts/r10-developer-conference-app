import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutStack = createStackNavigator({
  About: AboutScreen
});
const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Session: SessionScreen
});
const FavesStack = createStackNavigator({
  Faves: FavesScreen,
  Session: SessionScreen
});
const MapStack = createStackNavigator({
  Map: MapScreen
});

export default createBottomTabNavigator(
  {
    About: AboutStack,
    Schedule: ScheduleStack,
    Faves: FavesStack,
    Map: MapStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'About') {
          iconName = `ios-calendar`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Map') {
          iconName = `ios-map`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart`;
        } else {
          // schedule
          iconName = 'ios-information-circle';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: 'black'
      }
    }
  }
);
