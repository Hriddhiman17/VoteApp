import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/AppHeader';
import db from '../config';

export default class Home extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.inputView}>
          <TouchableOpacity 
          style = {{alignSelf: 'flex-start'}}
          onPress = {()=>{this.props.navigation.navigate('SettingsScreen')}}
          >
            <Text style = {styles.settingsText}>Settings</Text>
            <Image style = {styles.imageIcon}source={require('../assets/settings.png')} />
          </TouchableOpacity>
          <Text style={styles.head}>Vote App</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FF6400',
    padding: 20,
    textAlign: 'center',
  },
  head: {
    fontSize: 22,
    alignSelf: 'center',
    backgroundColor: '#FF6400',
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: '#FF6400',
  },
  imageIcon: {
    width: 25,
    height: 25,
  },
  settingsText:{
    fontSize: 22,
    backgroundColor: '#FF6400'
  }
})