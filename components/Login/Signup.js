import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "../Logo";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="username or email"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="password"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={input => (this.password = input)}
          onSubmitEditing={() => this.repassword.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="re-enter password"
          returnKeyType="go"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={input => (this.repassword = input)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("login")}
          >
            <Text style={styles.buttonText}> Login</Text>
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
