import React from 'react';
import Speaker from './Speaker';
import PropTypes from 'prop-types';

const SpeakerContainer = ({ navigation }) => (
  <Speaker speaker={navigation.getParam('speaker')} />
);

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
