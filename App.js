import React, {Component} from 'react';
import {View} from 'react-native';
import Welcome from './screens/WelcomeScreen';
import CardNo from './screens/voterCardNo.Screen';
import Home from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends Component {
  render(){
    return (
      <View>
        <Welcome/>
      </View>
    );
  }
}
// const TabNavigator = createBottomTabNavigator({ 
//   Transaction: {screen: TransactionScreen}, 
//   Search: {screen: SearchScreen}, 
// }), 
// // { 
// //   defaultNavigationOptions: ({navigation})=>({ 
// //     tabBarIcon: ()=>{ 
// //       const routeName = navigation.state.routeName;
// //        console.log(routeName) 
// //        if(routeName === "Transaction"){ 
// //         return( 
// //           <Image source={require("./assets/book.png")} style={{width:40, height:40}} /> 
// //         ) 
// //         } else if(routeName === "Search"){ 
// //           return( 
// //             <Image source={require("./assets/searchingbook.png")} style={{width:40, height:40}} />
// //           ) 
// //         } 
// //       } 
// //     }) 
// //   } 
// //   );
// const AppContainer =  createAppContainer(TabNavigator);
