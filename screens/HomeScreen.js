import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Header from '../components/AppHeader';
import db from '../config';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.inputView}>
        <TouchableOpacity>
          <Text style = {styles.settingsText}>Settings</Text>
          <Image source={require('../assets/settings.png')} />
          </TouchableOpacity>   
        <Text style={styles.head}>Vote App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: '#FF6400',
    padding: 20,
  },
  inputView: {
    flexDirection: 'row',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  settingsText:{
    fontSize: 22,
    backgroundColor: '#FF6400'
  }
})