import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
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
              fontFamily: 'Montserrat-Light'
            }}
          >
            {location}
          </Text>
          {id && faveIds.includes(id) && (
            <Icon
              name="ios-heart"
              size={15}
              color={Colors.red}
              style={{ padding: 10 }}
            />
          )}
        </View>

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
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center' }}
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
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  width: '60%',
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
    </View>
  );
};

export default withNavigation(Session);
