import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, { Colors, Fonts } from '../../config/styles';
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          textAlign: 'center'
        }}
      >
        <TouchableHighlight
          style={{ alignSelf: 'flex-start' }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="ios-close" size={50} color="white" />
        </TouchableHighlight>
        <Text
          style={{ color: 'white', fontFamily: Fonts.regular, fontSize: 18 }}
        >
          About the Speaker
        </Text>
        <View />
      </View>

      <View
        style={{
          width: '90%',
          height: '85%',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 10
        }}
      >
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
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
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15
            }}
            onPress={() => Linking.openURL(speaker.url)}
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
                marginBottom: 15
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
                Read More on Wikipedia
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default withNavigation(Speaker);
