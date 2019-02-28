import { Platform, StyleSheet } from 'react-native';

export const Colors = {
  mgrey: '#999999',
  lgrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a'
};

export const Fonts = {
  light: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      regular: 'Montserrat'
    },
    android: {
      regular: 'Montserrat-Regular'
    }
  })
};

export const Heading = {
  fontFamily: Fonts.regular,
  fontSize: 32,
  marginBottom: 16,
  marginTop: 16
};

export const Paragraph = {
  fontFamily: 'Montserrat-Light',
  fontSize: 18,
  marginTop: 5,
  marginBottom: 5
};

export const Container = {
  alignItems: 'center',
  padding: 10
};

export default (styles = {
  Heading,
  Paragraph,
  Container
});
