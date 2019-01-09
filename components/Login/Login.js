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
ios: 'Login',
android: 'Login' 
});

let mobile="";
let password="";
onPressButton= ()=>{
  alert('Test this handle click - '+title+':User:'+mobile+':Password:'+password)
}
onPressButtonSignup= ()=>{
  alert('Signup:'+mobile+ '--- Password:'+password)
}
getMobileData=(data)=>{
  mobile=data;
}
getPasswordData=(data)=>{
  password=data;
}
export default class Registration extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Logo />
      <TextNumPU titlePU="enter mobile" keytype={title} textData={getMobileData} name="mobile" nextName="email"/>
      <TextPassPU titlePU="enter password" keytype={title} textData={getPasswordData} name="password"/>
      <ButtonPU titlePU={title} handleOnPress={onPressButton} />  
      <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
      </View>
          <ButtonPU titlePU="Signup" handleOnPress={onPressButtonSignup} />  
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 6,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
