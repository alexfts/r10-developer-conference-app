import { StyleSheet, View, Platform } from 'react-native';
import React from 'react';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../config/styles';
import styles from './styles';

const GradientHeader = props => (
  <View style={styles.gradientContainer}>
    <LinearGradient
      colors={[Colors.red, Colors.purple]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, styles.gradient]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => {
  const result = {
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent'
    }
  };
  const isSession = navigation.state.routeName === 'Session';
  return Platform.OS === 'android'
    ? {
        ...result,
        headerLeft: () => (
          <Icon
            name={isSession ? 'md-arrow-back' : 'md-menu'}
            size={30}
            color={Colors.white}
            style={styles.androidMenu}
            onPress={() => {
              if (isSession) {
                navigation.goBack();
              } else {
                navigation.toggleDrawer();
              }
            }}
          />
        )
      }
    : result;
};
