import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert } from "react-native";
// import { MapView } from 'expo'; //Use this for Dev environment - Expo testing
//import MapView from "react-native-maps";  //Use this for production environment

export default class UserMap extends Component {
    constructor(){
      super();
      navigator.geolocation.getCurrentPosition(position=>{
        //Alert.alert(`Current - Longitute : ${position.coords.longitude} and Latitude : ${position.coords.latitude}`);
        this.setState({
           userLocation:{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922/75,
            longitudeDelta: 0.0421/75,
           } 
         });
    },err=>Alert.alert(err)); 
    }
    state={
      userLocation:""
    }

    componentDidMount(){
    // navigator.geolocation.getCurrentPosition(position=>{
    //     //Alert.alert(`Current - Longitute : ${position.coords.longitude} and Latitude : ${position.coords.latitude}`);
    //     this.setState({
    //        userLocation:{
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: 0.0922/75,
    //         longitudeDelta: 0.0421/75,
    //        } 
    //      });
    // },err=>Alert.alert(err)); 
  }
  
  render() {
    let userLocationMarker=null;
    if(this.state.userLocation){
      userLocationMarker=<MapView.Marker coordinate={this.state.userLocation} />
    }
    return (
      <View style={styles.container}>
          {/* <MapView 
          initialRegion={{
            latitude: 19.1383,
            longitude: 77.3210,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            }}
            region={this.state.userLocation}
          style={styles.Map} >
            {userLocationMarker}
          </MapView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    padding:2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderBottomWidth: 10,
    borderTopWidth: 4,
    borderBottomColor: "#ccc",
    borderTopColor: "#000000"
  },
  Map:{
    width: "100%",
    height: "100%",
  }
});