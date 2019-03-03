import React from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Colors } from '../../config/styles';
import eventsStyles from './styles';
import Divider from '../Divider';
import FaveIcon from '../FaveIcon';
import PropTypes from 'prop-types';

const Events = ({ data, navigation, faveIds }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <TouchableHighlight
          activeOpacity={75 / 100}
          underlayColor={Colors.lgrey}
          onPress={() => {
            if (item.speaker && item.speaker.id) {
              navigation.navigate('Session', { item });
            }
          }}
        >
          <View style={eventsStyles.sessionLink}>
            <Text style={eventsStyles.title}>{item.title}</Text>
            <View style={eventsStyles.details}>
              <Text style={eventsStyles.location}>{item.location}</Text>
              {item.id && faveIds.includes(item.id) && <FaveIcon />}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <View style={eventsStyles.header}>
          <Text style={eventsStyles.time}>
            {moment(section.title).format('h:mm A')}
          </Text>
        </View>
      )}
      sections={data}
      ItemSeparatorComponent={() => <Divider />}
      keyExtractor={item => item.id}
    />
  );
};

Events.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
      speaker: PropTypes.object
    })
  ).isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withNavigation(Events);
