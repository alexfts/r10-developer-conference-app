import React from 'react';
import styles, { Colors } from '../../config/styles';
import { Fonts } from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
export default ({ title, width, handlePress }) => (
  <TouchableOpacity
    style={{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    onPress={handlePress}
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
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);
