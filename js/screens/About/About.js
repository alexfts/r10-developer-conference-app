import React from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import styles from '../../config/styles';
import aboutStyles from './styles';
import Collapsible from '../../components/Collapsible';
import Divider from '../../components/Divider';

const About = ({ data }) => (
  <ScrollView>
    <View style={styles.Container}>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={aboutStyles.logo}
      />
      <Divider />
      <View style={aboutStyles.r10Description}>
        <Text style={aboutStyles.Paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>
      <View style={aboutStyles.r10Description}>
        <Text style={styles.Heading}>Date & Venue</Text>
        <Text style={styles.Paragraph}>
          The R10 conference will take place on Dec 31, 2019 in Vancouver, BC
        </Text>
      </View>
      <View style={aboutStyles.r10Description}>
        <Text style={styles.Heading}>Code of Conduct</Text>
        <FlatList
          style={aboutStyles.codeOfConduct}
          data={data.allConducts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Collapsible item={item} />}
        />
      </View>
      <Divider />
      <Text style={aboutStyles.footer}>© RED Academy 2019</Text>
    </View>
  </ScrollView>
);

export default About;
