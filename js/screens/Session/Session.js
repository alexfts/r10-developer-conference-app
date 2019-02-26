import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

const Session = ({ item, navigation, speaker }) => {
  const { description, title, location, startTime } = item;
  return (
    <View>
      <View style={{ padding: 20, fontFamily: 'Montserrat' }}>
        <Text style={{ fontSize: 18, color: '#999999' }}>{location}</Text>
        <Text>{moment(startTime).format('h:mm a')}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>Presented by:</Text>
        <TouchableHighlight
          activeOpacity={75 / 100}
          underlayColor={'rgb(210,210,210)'}
          onPress={() => {
            navigation.navigate('Speaker', { speaker });
          }}
        >
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: speaker.image }}
              borderRadius={25}
            />
            <Text>{speaker.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default withNavigation(Session);
