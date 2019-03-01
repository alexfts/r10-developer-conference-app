import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import styles from '../../config/styles';
import Collapsible from '../../components/Collapsible';
import Divider from '../../components/Divider';

class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Image
            source={require('../../assets/images/r10_logo.png')}
            style={{
              overflow: 'visible',
              marginBottom: 25,
              marginTop: 25
            }}
          />
          <Divider />
          <View style={{ width: '100%' }}>
            <Text style={styles.Paragraph}>
              R10 is a conference that focuses on just about any topic related
              to dev.
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            <Text style={styles.Heading}>Date & Venue</Text>
            <Text style={styles.Paragraph}>
              The R10 conference will take place on Dec 31, 2019 in Vancouver,
              BC
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            <Text style={styles.Heading}>Code of Conduct</Text>
            <FlatList
              style={{ backgroundColor: 'white' }}
              data={data.allConducts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Collapsible item={item} />}
            />
          </View>
          <Divider />
          <Text style={{ ...styles.Paragraph, alignSelf: 'flex-start' }}>
            © RED Academy 2019
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default About;
