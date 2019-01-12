import React, { Component } from "react";
import { ScrollView,View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import { ImageElement } from "./ImageElement";

export class ImageElements extends Component {
  render() {
    const { imageelements } = this.props;
    return (
      <ScrollView style={styles.bottomItems}>
        <View style={styles.listItems}>
        {
          imageelements.map(imageelement => (
          <ImageElement
            imgsource={imageelement.media.m}
            style={styles.bottomItem}
          />
        )
        )
        }
        </View>
        
      </ScrollView>
    );
  }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  bottomItems:{
    padding:5,
    backgroundColor: "#292929",
    alignItems: "center"
   },
  listItems:{
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
  }
});
export default ImageElements;