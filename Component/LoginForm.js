import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Logo from "../Component/Logo";
import { login } from "../services/authService";

export default class LoginForm extends Component {
  verifyLogin = async () => {
    //alert(`${this.state.username.toString().trim()} :  ${this.state.password}`);
    //const result = await login(this.state.username.toString().trim(),this.state.password.toString().trim());
    const token = await login(
      this.state.username.toString().trim(),
      this.state.password.toString().trim()
    );
    this.props.navigation.navigate("category");
    //alert(result);
    // navigator.geolocation.getCurrentPosition(position=>{
    //     Alert.alert(`Longitute : ${position.coords.longitude} and Latitude : ${position.coords.latitude}`);
    // },err=>Alert.alert(err));
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          onChangeText={username => this.setState({ username })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="enter mobile number"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={password => this.setState({ password })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="password"
          returnKeyType="go"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={input => (this.password = input)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.verifyLogin()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("signup")}
          >
            <Text style={styles.buttonText}> Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("MyHome")}
          >
            <Text style={styles.buttonText}> Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Categorys")}
          >
            <Text style={styles.buttonText}> Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("UsersApp")}
          >
            <Text style={styles.buttonText}>Users</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 7,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  button: {
    width: 200,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 10,
    color: "#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  signupText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 5,
    marginTop: 40,
    borderTopWidth: 2,
    borderTopColor: "#ccc"
  }
});
