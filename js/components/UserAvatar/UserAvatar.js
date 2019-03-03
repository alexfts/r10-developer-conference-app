import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const UserAvatar = ({ uri, size }) => (
  <Image style={styles.img(size)} source={{ uri }} borderRadius={size / 2} />
);

UserAvatar.propTypes = {
  uri: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default UserAvatar;
