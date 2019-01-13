import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={{
            uri:
              "https://res.cloudinary.com/pickup/image/upload/v1540233800/Pickup/logoPickupBiz.jpg"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 70,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 15
  },
  logoImage: {
    padding: 2,
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
