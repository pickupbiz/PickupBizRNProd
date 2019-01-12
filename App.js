
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {PickupBiz} from "./PickupBizApp";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <PickupBiz />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFF00",
    justifyContent: "center",
    alignItems: "center"
  }
});
