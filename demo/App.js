import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function helo() {
  return (
    <View>
      <Text style={styles.font3}> Profile</Text>
      <Text style={styles.font}>Email Adress</Text>
      <TextInput style={styles.input}> </TextInput>
      <Text style={styles.font}>Password</Text>
      <TextInput style={styles.input}> </TextInput>
      <Text style={styles.font2}>Forgot Password</Text>
      <View style={styles.button1}>
        <Button title="sign in" color="gold" />
      </View>
      <View style={styles.button1}>
        <Button title="Join now" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button1: {
    margin: 30,
    height: 40,
    color: 'black',
  },
  text1: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  font: {
    fontSize: 20,
    color: '#00FF00',
  },
  font2: {
    fontSize: 18,
    color: '#000000',
  },
  font3: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000000',
  },
});
