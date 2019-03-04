import { Platform } from 'react-native';

export const Colors = {
  mgrey: '#999999',
  lgrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  white: '#fff'
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
  fontFamily: Fonts.light,
  fontSize: 18,
  marginTop: 5,
  marginBottom: 5
};

export const Container = {
  alignItems: 'center',
  padding: 10
};

export const NavigationOptions = {
  activeTintColor: '#fff',
  inactiveTintColor: '#999999',
  labelStyle: {
    fontSize: Platform.OS === 'android' ? 20 : 10,
    fontFamily: Fonts.regular
  },
  style: {
    backgroundColor: '#000'
  }
};

export const getNavigationOptions = title => {
  const result = {
    title,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 24,
      fontFamily: Fonts.regular
    }
  };
  const iosOptions = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return Platform.select({
    ios: { ...result, headerTitleContainerStyle: iosOptions },
    android: result
  });
};

export default (styles = {
  Heading,
  Paragraph,
  Container
});
