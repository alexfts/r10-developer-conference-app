import { StyleSheet } from 'react-native';
import styles, { Fonts } from '../../config/styles';

export default StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100%'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    textAlign: 'center'
  },
  closeButton: { alignSelf: 'flex-start' },
  about: { color: '#fff', fontFamily: Fonts.regular, fontSize: 18 },
  info: {
    width: '90%',
    height: '85%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10
  },
  scrollView: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15
  },
  bio: {
    ...styles.Paragraph,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15
  }
});
