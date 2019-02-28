import React, { Component } from 'react';
import {
  Text,
  Platform,
  View,
  FlatList,
  SectionList,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Colors } from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Fonts } from '../../config/styles';

const Events = ({ data, navigation, faveIds, saveFave, removeFave }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <TouchableHighlight
          activeOpacity={75 / 100}
          underlayColor={'rgb(210,210,210)'}
          onPress={() => {
            navigation.navigate('Session', { item });
          }}
        >
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Fonts.regular,
                marginTop: 16
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: '#999999',
                  fontFamily: 'Montserrat-Light',
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                {item.location}
              </Text>
              {item.id && faveIds.includes(item.id) && (
                <Icon
                  style={styles.heart}
                  name={Platform.select({
                    ios: 'ios-heart',
                    android: 'md-heart'
                  })}
                  size={15}
                  color={Colors.red}
                />
              )}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <View style={{ backgroundColor: '#e6e6e6' }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.regular,
              padding: 5,
              paddingLeft: 15
            }}
          >
            {moment(section.title).format('h:mm A')}
          </Text>
        </View>
      )}
      sections={data}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderStyle: 'solid',
            borderWidth: 0.5,
            backgroundColor: '#e6e6e6',
            color: '#e6e6e6'
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default withNavigation(Events);
