import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { Colors } from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';

const Speaker = ({ navigation, speaker }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%'
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableHighlight
          style={{ color: 'white' }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="ios-close" size={50} color="white" />
        </TouchableHighlight>
        <Text style={{ color: 'white' }}>About the Speaker</Text>
      </View>
      <View
        style={{
          width: '90%',
          height: '80%',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 10
        }}
      >
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={{ uri: speaker.image }}
          borderRadius={50}
        />
        <Text style={styles.Heading}>{speaker.name}</Text>
        <Text
          style={{ ...styles.Paragraph, paddingLeft: 20, paddingRight: 20 }}
        >
          {speaker.bio}
        </Text>
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={() => Linking.openURL(speaker.url)}
        >
          <LinearGradient
            colors={[Colors.purple, Colors.blue]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={{
              borderRadius: 50,
              width: '60%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                width: '60%',
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 18,
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Read More on Wikipedia
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(Speaker);
