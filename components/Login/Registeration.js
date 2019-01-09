/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import PickupBizApp from "../../PickupBizApp";
import ButtonPU from "../Common/puButton";
import TextPU from "../Common/puText";
import TextNumPU from "../Common/puTextNum";
import TextPassPU from "../Common/puTextPass";
import Logo from "../Common/Logo";

const title= Platform.select({
ios: 'Save',
android: 'Submit' 
});

let mobile="";
let email="";
let password="";
onPressButton= ()=>{
  alert('Test this handle click - '+title+':User:'+mobile+':email:'
  +email+':Password:'+password)
}
getMobileData=(data)=>{
  mobile=data;
}
getEmailData=(data)=>{
  email=data;
}
getPasswordData=(data)=>{
  password=data;
}
export default class Registration extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Logo />
      <TextNumPU titlePU="enter mobile here.." keytype={title} textData={getMobileData} name="mobile" nextName="email"/>
      <TextPU titlePU="enter email here.." keytype={title} textData={getEmailData} name="email"/>
      <TextPassPU titlePU="enter password here.." keytype={title} textData={getPasswordData} name="password"/>
      <ButtonPU titlePU={title} handleOnPress={onPressButton} />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 200,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 10,
    color: "#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
