import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/AppHeader';
import db from '../config';

export default class Settings extends Component {
  render() {
    return (
      <View>
          <Header/>
      </View>
    );
  }
}
const styles = StyleSheet.create({

})