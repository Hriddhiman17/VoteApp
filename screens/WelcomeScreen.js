import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/AppHeader';

export default class Welcome extends Component {
  constructor(){
    super();
    this.state = {
      phone : '',
    }
  }
  render() {
    return (
      <View>
        <Header/>
        <Text style={styles.text}>Welcome to the Vote App. Please Enter your phone no. here </Text>
        <TextInput 
            style = {styles.inputBox}
            placeholder = "Phone number"
            onChangeText = {text=>
              this.setState({
                phone: text
              })
            }
        />
        <TouchableOpacity 
            style = {styles.submitButton}>
            <Text style = {{fontSize:22}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
    if(this.state.phone.length === 10){
      return(
        <View>
          <Text>hsssssssssssssssssss</Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>ssssssssssss</Text>
        </View>
      )
    }
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