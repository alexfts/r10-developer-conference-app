import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

export default ({ data }) => {
  return (
    <View>
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={data.allConducts}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text style={{ fontSize: 50 }}>{item.title}</Text>
            <Text>
              {item.description}
              {item.order}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
