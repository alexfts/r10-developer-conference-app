import { StyleSheet } from 'react-native';
import styles from '../../config/styles';
export default StyleSheet.create({
  logo: {
    overflow: 'visible',
    marginBottom: 25,
    marginTop: 25
  },
  r10Description: { width: '100%' },
  codeOfConduct: { backgroundColor: '#fff' },
  footer: { ...styles.Paragraph, alignSelf: 'flex-start' }
});
