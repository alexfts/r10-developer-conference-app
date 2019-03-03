import React from 'react';
import { Colors } from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const GradientButton = ({ title, handlePress }) => (
  <TouchableOpacity style={styles.button} onPress={handlePress}>
    <LinearGradient
      colors={[Colors.purple, Colors.blue]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={styles.gradient}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

GradientButton.propTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired
};

export default GradientButton;
