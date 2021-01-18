import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, ScrollView, Switch} from 'react-native';
import Header from '../components/AppHeader';
import db from '../config';

export default class Welcome extends Component {
  constructor(){
    super();
    this.state = {
      phone: '',
      Vcard: '',
      Acard: '',
    }
  }
  createAProfile(){
    if(this.state.Vcard.length === 10 && this.state.phone.length === 10 && this.state.Acard.length === 12){
      db.collection("voters").doc(this.state.phone).set({
        'Phone': this.state.phone,
      })
      db.collection("voters").doc(this.state.Vcard).set({
        'VoterCardNumber': this.state.Vcard,
      })
      db.collection("voters").doc(this.state.Acard).set({
        'AadhaarCardNumber': this.state.Acard,
      })
    }else{
      
    }
  }

  render() {
    return (
      <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header/>
        <Text style={[styles.text, {marginTop: 25}]}>Hello and welcome to the Vote From Home App. This App would help to make your vote easy, safe, and from home.</Text>
            <Text style={styles.text}>Enter your Phone no. here</Text>
        <TextInput
            style = {styles.inputBox}
            placeholder = "Phone Number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                phone: text
              })
            }/>
        <Text style={[styles.text, {marginTop: 15}]}>Enter your voter card no. here-</Text>
        <TextInput
            style = {styles.inputBox}
            placeholder = "Voter Card Number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                Vcard: text
              })
            }/>
          <Text style={[styles.text, {marginTop: 15}]}>Enter your aadhaar card no. here</Text>
        <TextInput
            style = {styles.inputBox}
            placeholder = "Aadhaar Card Number"
            keyboardType= "numeric"
            onChangeText = {text=>
              this.setState({
                Acard: text
              })
            }/>
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {()=>this.props.navigation.navigate('HomeScreen')}>
            <Text style = {{fontSize:22}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
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