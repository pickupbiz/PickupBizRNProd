import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "./Product";

export class Products extends Component {
  render() {
    const { products, onNewProduct } = this.props;
    return (
      <ScrollView>
        {products.map(product => (
          <Product
            ProductId={product.id}
            ProductText={product.value}
            ProductAuthor={product.auth}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={onNewProduct}>
          <Text>Add New Product</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.35,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Products;
