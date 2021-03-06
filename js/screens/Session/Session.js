import React from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import styles, { Colors } from '../../config/styles';
import Divider from '../../components/Divider';
import UserAvatar from '../../components/UserAvatar';
import GradientButton from '../../components/GradientButton';
import FaveIcon from '../../components/FaveIcon';
import sessionStyles from './styles';
import PropTypes from 'prop-types';

const Session = ({
  item,
  navigation,
  speaker,
  faveIds,
  removeFave,
  saveFave
}) => {
  const { description, title, location, startTime, id } = item;
  return (
    <ScrollView>
      <View style={sessionStyles.session}>
        <View style={sessionStyles.header}>
          <Text style={sessionStyles.location}>{location}</Text>
          {id && faveIds.includes(id) && <FaveIcon />}
        </View>

        <Text style={styles.Heading}>{title}</Text>
        <Text style={sessionStyles.time}>
          {moment(startTime).format('h:mm A')}
        </Text>

        <Text style={sessionStyles.description}>{description}</Text>
        <Text style={sessionStyles.greyText}>Presented by:</Text>
        <TouchableHighlight
          activeOpacity={75 / 100}
          underlayColor={Colors.lgrey}
          onPress={() => {
            navigation.navigate('Speaker', { speaker });
          }}
        >
          <View style={sessionStyles.speakerInfo}>
            <UserAvatar uri={speaker.image} size={70} />
            <Text style={sessionStyles.speaker}>{speaker.name}</Text>
          </View>
        </TouchableHighlight>
        <Divider />
        <View style={sessionStyles.buttonView}>
          <GradientButton
            handlePress={() => {
              if (faveIds.includes(id)) {
                removeFave(id);
              } else {
                saveFave(id);
              }
            }}
            title={faveIds.includes(id) ? 'Remove from Faves' : 'Add to Faves'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

Session.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired,
  speaker: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeFave: PropTypes.func.isRequired,
  saveFave: PropTypes.func.isRequired
};

export default withNavigation(Session);
