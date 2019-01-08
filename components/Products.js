import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

class Products extends Component {
  renderProducts = products => {
    console.log(products);
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onPress(item)}
          >
            <Text style={styles.buttonText}>
              {" "}
              {item.name + " - " + item.price}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
export default Products;

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
