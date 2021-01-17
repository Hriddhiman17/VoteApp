import React, {Component} from 'react';
import {View} from 'react-native';
import Welcome from './screens/WelcomeScreen';
import Unnamed from './screens/Unnamed';
import Home from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen: Welcome,
  HomeScreen: Home,
});

const AppContainer = createAppContainer(AppNavigator);