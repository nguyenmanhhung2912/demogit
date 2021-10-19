import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons';

export default function login() {
  return (
    <View>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderColor: 'grey',
          }}>
          <Text> Short By: </Text>{' '}
          <Text style={{fontWeight: 'bold'}}> Relevance </Text>{' '}
        </View>{' '}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> SHort By: </Text>{' '}
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>
            {' '}
            Filter:{' '}
          </Text>{' '}
        </View>{' '}
      </View>{' '}
    </View>
  );
}
