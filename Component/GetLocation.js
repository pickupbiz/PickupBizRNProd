import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert } from "react-native";

export default class GetLocation extends Component {

    GetLoacation= ()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        Alert.alert(`Longitute : ${position.coords.longitude} and Latitude : ${position.coords.latitude}`);
    },err=>Alert.alert(err));
};  
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={this.GetLoacation}>
                <Text style={styles.buttonText}>Get Location</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    padding:2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom:50,
    borderRadius: 15
  },
  button: {
    width: 200,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 10,
    color:"#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});