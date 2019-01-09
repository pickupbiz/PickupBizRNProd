
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import PickupBizApp from "./PickupBizApp";
import Registration from "./components/Login/Registeration";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Registration />
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
  }
});
