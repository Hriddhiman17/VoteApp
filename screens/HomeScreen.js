import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Header from '../components/AppHeader';
import db from '../config';

export default class Welcome extends Component {
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