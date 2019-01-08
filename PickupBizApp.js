import React from "react";
import axios from "axios";
import { createStackNavigator } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  Navigator
} from "react-native";
// import { ImageElements } from "./Component/ImageElements";
// import { Header } from "./Component/Header";
// import Home from "./Screens/Home";
// import PhotoGallary from "./Screens/PhotoGallary";
 import About from "./Screens/About";
//import LoginForm from "./components/Login/LoginTest";
// import SignupForm from "./components/Login/Signup";

// import HomeScreen from "./containers/ShoppingCart/HomeScreen";
// import ElectronicsScreen from "./containers/ShoppingCart/ElectronicsScreen";
// import BooksScreen from "./containers/ShoppingCart/BooksScreen";
// import ShoppingCartIcon from "./containers/ShoppingCart/ShoppingCartIcon";
// import CartScreen from "./containers/ShoppingCart/CartScreen";
// import CategorysApp from "./components/Categorys/Categorys";
// import CategorysAppNew from "./components/Categorys/CategorysNew";
// import UsersApp from "./app/UsersApp";

export default class PickupBiz extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    //login: LoginForm
    // home: Home
    // signup: SignupForm,
     about: About
    // photogallary: PhotoGallary,
    // MyHome: HomeScreen,
    // Electronics: ElectronicsScreen,
    // Books: BooksScreen,
    // Cart: CartScreen,
    // Categorys: CategorysApp,
    // CategorysNew: CategorysAppNew,
    // UsersApp: UsersApp
  },
  {
    navigationOptions: {
      headerTitle: "Shopping App"
        }
  }
);
