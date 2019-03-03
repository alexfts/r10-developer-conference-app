import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../config/styles';
const styles = StyleSheet.create({
  heart: {
    padding: 10
  },
  sessionLink: { paddingLeft: 15 },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginTop: 8
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  location: {
    fontSize: 14,
    color: Colors.mgrey,
    fontFamily: Fonts.light,
    marginTop: 10,
    marginBottom: 10
  },
  header: { backgroundColor: Colors.lgrey },
  time: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    padding: 5,
    paddingLeft: 15
  }
});

export default styles;
