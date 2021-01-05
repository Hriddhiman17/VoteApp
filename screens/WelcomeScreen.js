import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/AppHeader';
import db from '../config';

export default class Welcome extends Component {
  constructor(){
    super();
    this.state = {
      phone: '',
      card: '',
    }
  }
  createAProfile(){
    db.collection("voters").doc(this.state.phone).set({
      'Phone': this.state.phone,
    })
    db.collection("voters").doc(this.state.card).set({
      'CardNumber': this.state.card,
    })
  }
  render() {
    return (
      <View>
        <Header/>
        <Text style={styles.text}>Welcome to the Vote From Home App. This App would help to make your vote easy, safe, and from home.</Text>
        <Text>Please Enter your Name here-</Text>
        <TextInput 
            style = {styles.inputBox}
            placeholder = "Your Name"
            keyboardType= "default"
            onChangeText = {text=>
              this.setState({
                phone: text
              })
            }/>
        <TextInput 
            style = {styles.inputBox}
            placeholder = "Phone number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                phone: text
              })
            }/>
        <Text style={styles.text}>Enter your card no. here-</Text>
        <TextInput
            style = {styles.inputBox}
            placeholder = "Card number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                card: text
              })
            }/>
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {()=> {this.createAProfile}}>
            <Text style = {{fontSize:22}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 22,
    padding: 20,
  },
  inputBox: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderWidth: 3,
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 25
  },
  submitButton:{
      alignSelf:'center',
      padding:10,
      marginTop:10,
      backgroundColor:'rgb(255, 255, 0)',
  }
})