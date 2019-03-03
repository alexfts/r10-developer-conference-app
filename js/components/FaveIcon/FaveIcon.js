import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => (
  <Icon
    name={Platform.select({
      ios: 'ios-heart',
      android: 'md-heart'
    })}
    size={15}
    color={Colors.red}
    style={{ paddingLeft: 10, paddingRight: 10 }}
  />
);
