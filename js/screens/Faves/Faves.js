import React from 'react';
import { View } from 'react-native';
import styles from '../../config/styles';
import Events from '../../components/Events';

export default props => (
  <View styles={styles.Container}>
    <Events {...props} />
  </View>
);
