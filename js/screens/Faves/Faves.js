import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../../config/styles';

export default ({ data, faveIds, removeFave, saveFave }) => {
  return (
    <View styles={styles.Container}>
      <Text>Faves</Text>
    </View>
  );
};
