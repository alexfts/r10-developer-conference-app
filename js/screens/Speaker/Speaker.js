import React, { Component } from 'react';
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const Speaker = ({ data, navigation, speaker }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '50%', height: '50%' }}>
        <Image
          style={{ width: 70, height: 70 }}
          source={{ uri: speaker.image }}
          borderRadius={35}
        />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
        <TouchableHighlight
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="ios-close" size={50} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default withNavigation(Speaker);
