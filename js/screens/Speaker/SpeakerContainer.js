import React, { Component } from 'react';
import Speaker from './Speaker';

export default class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    return <Speaker speaker={navigation.getParam('speaker')} />;
  }
}
