import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import styles from '../../config/styles';

export default ({ data }) => {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={{
          height: 60,
          overflow: 'visible',
          marginBottom: 25,
          marginTop: 25
        }}
      />
      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 0.5,
          backgroundColor: '#e6e6e6'
        }}
      />
      <View style={{ width: '100%' }}>
        <Text style={styles.Paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>
      <View style={{ width: '100%' }}>
        <Text style={styles.Heading}>Date & Venue</Text>
        <Text style={styles.Paragraph}>
          The R10 conference will take place on Dec 31, 2019 in Vancouver, BC
        </Text>
      </View>
      <View style={{ width: '100%' }}>
        <Text style={styles.Heading}>Code of Conduct</Text>
        <FlatList
          style={{ backgroundColor: 'white' }}
          data={data.allConducts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.Paragraph}>{item.title}</Text>
              <Text style={styles.Paragraph}>
                {item.description}
                {item.order}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
