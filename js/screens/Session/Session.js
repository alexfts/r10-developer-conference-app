import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, Button } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import styles, { Colors } from '../../config/styles';
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
    <View>
      <View style={{ padding: 20, fontFamily: 'Montserrat' }}>
        <Text
          style={{
            fontSize: 18,
            color: '#999999',
            fontFamily: 'Montserrat-Light'
          }}
        >
          {location}
        </Text>
        <Text style={styles.Heading}>{title}</Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Regular',
            color: Colors.red
          }}
        >
          {moment(startTime).format('h:mm A')}
        </Text>

        <Text
          style={{ ...styles.Paragraph, paddingTop: 20, paddingBottom: 20 }}
        >
          {description}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat-Regular',
            color: Colors.mgrey
          }}
        >
          Presented by:
        </Text>
        <TouchableHighlight
          activeOpacity={75 / 100}
          underlayColor={'rgb(210,210,210)'}
          onPress={() => {
            navigation.navigate('Speaker', { speaker });
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 15
            }}
          >
            <Image
              style={{ width: 70, height: 70, marginRight: 15 }}
              source={{ uri: speaker.image }}
              borderRadius={35}
            />
            <Text
              style={{ ...styles.Paragraph, fontFamily: 'Montserrat-Regular' }}
            >
              {speaker.name}
            </Text>
          </View>
        </TouchableHighlight>
        <Button
          onPress={() => {
            if (faveIds.includes(id)) {
              removeFave(id);
            } else {
              saveFave(id);
            }
          }}
          title={faveIds.includes(id) ? 'Remove from faves' : 'Add to faves'}
          color="#841584"
          accessibilityLabel="Add to faves"
        />
      </View>
    </View>
  );
};

export default withNavigation(Session);
