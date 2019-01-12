import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export class ImageElement extends Component {
  render() {
    return (
       <View style={styles.containerImage}>
          <Image source={{uri:this.props.imgsource}} style={styles.innerImage} resizeMode={'contain'} alt="no image"></Image>
      </View>
    );
  }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
   containerImage: {
    backgroundColor: "#292929",
    width: (win.width/3)-8,
    height: win.height/7,
    padding:1,
    alignItems: "center",
    justifyContent: "center"
  },
  innerImage: {
    backgroundColor: "#fff",
    padding: 1,
    width: win.width/3.5,
    height: (win.height/7) -8,
    alignItems: "center",
    justifyContent: "center"
  }
  });
export default ImageElement;