import React, { Component } from "react";
import { StyleSheet, Image, View, Text,TextInput,TouchableOpacity } from "react-native";

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      textSearch:"kitten"
    }
  }

  update = (e) => {
    this.props.onUpdate(e);
    this.setState({textSearch: e});
  };

  
  render() {
    let { onNewImageElement, onUpdate } = this.props;
    return (
      <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        onChangeText={this.update}
        value={this.state.textSearch}
      />
         <TouchableOpacity style={styles.button} onPress={onNewImageElement}>
           <Image
          source={require("../assets/search.png")}
          style={styles.searchControl}
        />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    height: "10%",
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    // alighnItem: "center",
    justifyContent: "center",
    padding: 5,
    borderBottomWidth: 10,
    borderBottomColor: "#ccc"
  },
  searchControl: {
    width: 25,
    height: 25
  },
  searchInput: {
    fontStyle: "italic",
    height: 30,
    width: "50%", 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 20,
    padding:7
  }
});
export default Header;