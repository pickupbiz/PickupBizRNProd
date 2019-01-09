import React, { Component } from "react";
import { StyleSheet, View,Text, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.buttonText}>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 70,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000080",
    textAlign: "center"
  },
  logoImage: {
    padding: 2,
    width: "80",
    height: "80",
    alignItems: "center",
    justifyContent: "center"
  }
});
