import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default ({ uri, size }) => (
  <Image style={styles.img(size)} source={{ uri }} borderRadius={size / 2} />
);
