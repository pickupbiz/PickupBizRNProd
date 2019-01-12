import React, { Component } from "react";
import { View, Text } from "react-native";

export class Product extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.ProductId}.{this.props.ProductText}
        </Text>
        <Text>
          ---
          {this.props.ProductAuthor}
        </Text>
      </View>
    );
  }
}

export default Product;
