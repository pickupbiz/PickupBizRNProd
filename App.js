
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {PickupBiz} from "./PickupBizApp";
import { Provider } from "react-redux";
import store from "./store/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <PickupBiz />
      </View>
      </Provider>
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
