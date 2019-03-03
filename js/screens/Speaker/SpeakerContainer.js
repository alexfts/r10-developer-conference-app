import React from 'react';
import Speaker from './Speaker';

const SpeakerContainer = ({ navigation }) => (
  <Speaker speaker={navigation.getParam('speaker')} />
);

export default SpeakerContainer;
