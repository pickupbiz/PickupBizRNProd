/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import PickupBizApp from "./PickupBizApp";
import ButtonPU from "./components/Common/puButton";
import TextPU from "./components/Common/puText";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu..',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu..........',
});

const title= Platform.select({
ios: 'I am IOS',
android: 'I am Android' 
});

onPressButton= ()=>{
  alert('Test this handle click from '+title+'!!')
}

export default class App extends Component {
 
  render() {
    return (
      <View style={styles.container}>
      <TextPU titlePU="enter mobile number here" />
        <ButtonPU titlePU={title} handleOnPress={onPressButton} />
        <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Test this about!!')}
              >
                <Text style={styles.buttonText}> About</Text>
              </TouchableOpacity>

        <Text style={styles.welcome}>{title}</Text>
        <Text style={styles.instructions}>Test</Text>
        <Text style={styles.instructions}>{instructions}</Text>

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
