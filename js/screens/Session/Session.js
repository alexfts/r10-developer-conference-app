import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ScrollView
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { Colors } from '../../config/styles';
import { Fonts } from '../../config/styles';
import Divider from '../../components/Divider';
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
      <View style={{ padding: 20, fontFamily: Fonts.regular }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#999999',
              fontFamily: Fonts.light
            }}
          >
            {location}
          </Text>
          {id && faveIds.includes(id) && (
            <Icon
              name={Platform.select({
                ios: 'ios-heart',
                android: 'md-heart'
              })}
              size={15}
              color={Colors.red}
              style={{ paddingRight: 10, paddingLeft: 10 }}
            />
          )}
        </View>

        <Text style={styles.Heading}>{title}</Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.regular,
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
            fontFamily: Fonts.regular,
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
            <Text style={{ ...styles.Paragraph, fontFamily: Fonts.regular }}>
              {speaker.name}
            </Text>
          </View>
        </TouchableHighlight>
        <Divider />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => {
              if (faveIds.includes(id)) {
                removeFave(id);
              } else {
                saveFave(id);
              }
            }}
          >
            <LinearGradient
              colors={[Colors.purple, Colors.blue]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={{
                borderRadius: 50,
                width: '70%',
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15
              }}
            >
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 18,
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {faveIds.includes(id) ? 'Remove from Faves' : 'Add to Faves'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Session);
