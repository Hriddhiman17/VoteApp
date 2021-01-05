import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
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
})