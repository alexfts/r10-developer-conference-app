import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Linking,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../config/styles';
import UserAvatar from '../../components/UserAvatar';
import GradientButton from '../../components/GradientButton';
import speakerStyles from './styles';

const Speaker = ({ navigation, speaker }) => (
  <View style={speakerStyles.modal}>
    <View style={speakerStyles.content}>
      <TouchableHighlight
        style={speakerStyles.closeButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="ios-close" size={50} color="#fff" />
      </TouchableHighlight>
      <Text style={speakerStyles.about}>About the Speaker</Text>
      <View />
    </View>

    <View style={speakerStyles.info}>
      <ScrollView contentContainerStyle={speakerStyles.scrollView}>
        <UserAvatar size={100} uri={speaker.image} />
        <Text style={styles.Heading}>{speaker.name}</Text>
        <Text style={speakerStyles.bio}>{speaker.bio}</Text>
        <GradientButton
          handlePress={() => Linking.openURL(speaker.url)}
          title="Read More on Wikipedia"
        />
      </ScrollView>
    </View>
  </View>
);

export default withNavigation(Speaker);
