import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../config/styles';

export default StyleSheet.create({
  session: {
    padding: 20,
    fontFamily: Fonts.regular
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  location: {
    fontSize: 18,
    color: Colors.mgrey,
    fontFamily: Fonts.light
  },
  heart: { paddingRight: 10, paddingLeft: 10 },
  time: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: Colors.red
  },
  greyText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.mgrey
  },
  description: { ...styles.Paragraph, paddingTop: 20, paddingBottom: 20 },
  speaker: { ...styles.Paragraph, fontFamily: Fonts.regular, marginLeft: 15 },
  speakerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
