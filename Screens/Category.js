import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import CategoryForm from "../Component/Categorys";

export default class Category extends React.Component {
  state = {};
  static navigationOption = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <CategoryForm />
        <View style={styles.categoryTextCont}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("home")}
          >
            <Text style={styles.categoryButton}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 2
  }
});
