import { StyleSheet } from 'react-native';
import styles, { Colors, Fonts } from '../../config/styles';
export default StyleSheet.create({
  container: { paddingTop: 10, paddingBottom: 10 },
  touchable: { flexDirection: 'row' },
  touchableText: {
    ...styles.Paragraph,
    fontFamily: Fonts.regular,
    color: Colors.purple
  }
});
