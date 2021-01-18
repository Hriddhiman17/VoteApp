import React, {Component} from 'react';
import {View} from 'react-native';
import Login from './screens/LoginScreen';
import Unnamed from './screens/Unnamed';
import Home from './screens/HomeScreen';
import Settings from './screens/SettingsScreen';
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
  LoginScreen:Login,
  HomeScreen: Home,
  SettingsScreen: Settings,
});

const AppContainer = createAppContainer(AppNavigator);