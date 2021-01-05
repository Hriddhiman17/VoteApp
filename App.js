import React, {Component} from 'react';
import {View} from 'react-native';
import Welcome from './screens/WelcomeScreen';
import CardNo from './screens/voterCardNo.Screen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends Component {
  render(){
    return (
        <Welcome/>
    );
  }
}