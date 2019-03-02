import { StyleSheet, View, TouchableHighlight, Platform } from 'react-native';
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
    {Platform.OS === 'android' && (
      <TouchableHighlight
        style={styles.androidMenu}
        activeOpacity={75 / 100}
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      >
        <Icon name="md-menu" size={40} color="#fff" />
      </TouchableHighlight>
    )}
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
  return Platform.OS === 'android' ? { ...result, headerLeft: null } : result;
};
