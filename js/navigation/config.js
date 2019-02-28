import { StyleSheet, View, TouchableHighlight, Platform } from 'react-native';
import React, { Component } from 'react';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

class GradientHeader extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <LinearGradient
          colors={['#cf392a', '#9963ea']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={[StyleSheet.absoluteFill, { height: '100%', width: '100%' }]}
        />
        {Platform.OS === 'android' && (
          <TouchableHighlight
            activeOpacity={75 / 100}
            underlayColor={'rgb(210,210,210)'}
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          >
            <Icon name="md-menu" size={40} />
          </TouchableHighlight>
        )}
        <Header {...this.props} />
      </View>
    );
  }
}

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
