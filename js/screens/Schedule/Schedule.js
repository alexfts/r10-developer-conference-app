import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SectionList,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

const Schedule = ({ data, navigation }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={75 / 100}
            underlayColor={'rgb(210,210,210)'}
            onPress={() => {
              navigation.navigate('Session', { item });
            }}
          >
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
              <Text style={{ fontSize: 14, color: '#999999' }}>
                {item.location}
              </Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: '#e6e6e6' }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat',
                padding: 5,
                paddingLeft: 10
              }}
            >
              {moment(section.title).format('h:mm a')}
            </Text>
          </View>
        )}
        sections={data}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderStyle: 'solid',
              borderWidth: 0.5,
              backgroundColor: '#e6e6e6'
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default withNavigation(Schedule);
