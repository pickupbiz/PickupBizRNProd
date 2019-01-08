import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal, Button,ScrollView } from "react-native";
import { ImageElements } from "../Component/ImageElements";
import { Header } from  "../Component/Header";
import PhotoGallary from "./PhotoGallary";
import About from "./About";
import PhotoUploader from "../Component/PhotoUploader";
import GetLocation from "../Component/GetLocation"; 
import UsersMap from "../Component/UserMap";

class Home extends Component {
    state = {  }
    render() { 
        return (
            <ScrollView style={styles.container}>
              <View style={styles.containerView}>
                <UsersMap />
                <PhotoUploader />
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('photogallary')}>
                <Text style={styles.buttonText}>Gallary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('login')}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
         );
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 2
    },
    containerView: {
      width:win.width,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 2
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
export default Home;