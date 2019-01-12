/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';
import Login from "../components/Login/Login";

//import { connect } from "react-redux";

handleNavigation=(route)=>{
  this.props.navigation.navigate('home');
}

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  static navigationOption = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Back to home"
          onPress={() =>
            navigate('home')
          }
        />
          <Login nav={navigate} />
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
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
