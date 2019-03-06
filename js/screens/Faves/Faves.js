import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../config/styles';
import Events from '../../components/Events';
import eventStyles from './styles';

export default props => (
  <View styles={styles.Container}>
    {props.data && props.data.length > 0 ? (
      <Events {...props} />
    ) : (
      <View styles={eventStyles.noFaves}>
        <Text>No favourites</Text>
      </View>
    )}
  </View>
);
