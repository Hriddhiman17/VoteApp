import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
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
    if(this.state.card.length === 10 && this.state.phone.length === 10){
      db.collection("voters").doc(this.state.phone).set({
        'Phone': this.state.phone,
      })
      db.collection("voters").doc(this.state.card).set({
        'CardNumber': this.state.card,
      })
    }else{
      ToastAndroid.show('Please enter a valid voter card no. or a valid Phone no. !!', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header/>
        <Text style={[styles.text, {marginTop: 75}]}>Hello and welcome to the Vote From Home App. This App would help to make your vote easy, safe, and from home.</Text>
            <Text style={styles.text}>Enter your Phone no. here</Text>
        <TextInput
            style = {styles.inputBox}
            placeholder = "Phone number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                phone: text
              })
            }/>
        <Text style={[styles.text, {marginTop: 15}]}>Enter your card no. here-</Text>
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
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    padding: 5,
  },
  inputBox: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderWidth: 3,
    fontSize: 20,
    paddingLeft: 15,
  },
  submitButton:{
      alignSelf:'center',
      padding:10,
      marginTop:10,
      height: 50,
      backgroundColor:'rgb(255, 255, 0)',
  }
})