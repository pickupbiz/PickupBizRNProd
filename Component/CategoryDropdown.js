import React, { Component } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

export default class CategoryDropdown extends Component {
  constructor(props) {
    super(props);
    const { data } = props.items;
    alert(JSON.stringify(data));
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        Categories:
        {this.state.data.map(category => {
          <Text style={styles.inputBox}>{category.name}</Text>;
        })}
      </ScrollView>
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

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 7,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  }
});
