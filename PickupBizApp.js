import React, {Component} from 'react';
//import axios from "axios";
import { createStackNavigator } from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from "./components/Login/Login";
//import LoginScreen from "./Screens/LoginScreen";
//import Login from "./Screens/Login";
//import Signup from "./components/Login/Signup";
//import Signup from "./Screens/Signup";
import HomeScreen from "./Screens/HomeScreen";

export class PickupBiz extends Component {
  render() {
    return (
      <View >
        <Text style={styles.textStyle}></Text>
        <AppStackNavigator  />
      </View>
    );
  }
}
//export default AppStackNavigator;
const AppStackNavigator = createStackNavigator({
  login: LoginScreen,
  home: HomeScreen,
    // photogallary: PhotoGallary,
    // MyHome: HomeScreen,
    // Electronics: ElectronicsScreen,
    // Books: BooksScreen,
    // Cart: CartScreen,
    // Categorys: CategorysApp,
    // CategorysNew: CategorysAppNew,
    // UsersApp: UsersApp
  }
  
  

  // ,
  // {
  //   navigationOptions: {
  //     headerTitle: "Shopping App"
  //       }
  // }
);
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFF00",
    justifyContent: "center",
    alignItems: "center",
    
  },
  textStyle:{
    width:430,
    height:1
  }
});

