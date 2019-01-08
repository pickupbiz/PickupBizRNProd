import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

class Category extends Component {
  renderCategory = categorys => {
    //console.log(categorys);
    return categorys.map((item, index) => {
      return (
        <View key={index} style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert(JSON.stringify(item))}
          >
            <Text style={styles.buttonText}>
              {" "}
              {item.name + " - " + item.rate}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderCategory(this.props.categorys)}
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    backgroundColor: "#1c313a",
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 5,
    color: "#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
