import React, { Component } from 'react';
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../config/styles';

const Speaker = ({ data, navigation, speaker }) => {
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
      </View>
    </View>
  );
};

export default withNavigation(Speaker);
