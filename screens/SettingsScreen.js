import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/AppHeader';
import db from '../config';

export default class Settings extends Component {
  constructor(){
    super();
    this.state={
      name: '',
    }
  }
  render() {
    return (
      <ScrollView>
        <Text style = {styles.settingsText}>SETTINGS</Text>
        <TextInput
          style = {styles.inputBox}
          placeholder = "Your Name"
          keyboardType = 'default'
          onChangeText = {text=>
            this.setState({
              name: text
            })
          }/>
        <TextInput
          style = {styles.inputBox}
          placeholder = "Your Age"
          keyboardType = 'numeric'
          onChangeText = {text=>
            this.setState({
              name: text
            })
          }/>
        <TextInput
          style = {styles.inputBox}
          placeholder = "Your Phone"
          keyboardType = 'numeric'
          onChangeText = {text=>
            this.setState({
              phone: text
            })
          }/>
          <TouchableOpacity style = {styles.updateButton}>
            <Text style = {styles.updateButtonText}>Update<Image style = {styles.imageIcon}source={require('../assets/rightArrow.png')} /></Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  inputBox: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderWidth: 3,
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 25
  },
  settingsText: {
    fontSize: 30,
    backgroundColor: '#FF6400',
    padding: 10,
    textAlign: 'center',
  },
  updateButton: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    marginRight: 25,
    backgroundColor: '#FF6400',
    padding: 10,
    marginTop: 25
  },
  updateButtonText :{
    fontSize: 22
  },
  imageIcon: {
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: 'row'
  }
})