import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../../config/styles';
import Events from '../../components/Events';

export default props => {
  return (
    <View styles={styles.Container}>
      <Events {...props} />
    </View>
  );
};
