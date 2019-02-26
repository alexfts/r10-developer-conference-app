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

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator({
  About: AboutStack,
  Schedule: ScheduleStack,
  Faves: FavesStack,
  Map: MapStack
});
