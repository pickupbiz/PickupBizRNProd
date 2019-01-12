import React, { Component } from "react";
import { saveCategory } from "../services/categorysService";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export default class Categorys extends Component {
  saveCategory = async () => {
    const result = await saveCategory(
      this.state.name,
      this.state.subscriptionId,
      this.state.token,
      this.state.numberOfDays,
      this.state.reminderDays,
      this.state.rate,
      this.state.order
      //   this.state.name.toString().trim(),
      //   this.state.password.toString().trim()
    );
    alert(`{
    name: ${result.name},
      numberOfDays: ${result.numberOfDays},
      reminderDays: ${result.reminderDays},
      rate: ${result.reminderDays},
      order: ${result.reminderDays},
      subscriptionId: ${result.subscriptionId} ,
      token: ${result.token}
    }`);
    // navigator.geolocation.getCurrentPosition(position=>{
    //     Alert.alert(`Longitute : ${position.coords.longitude} and Latitude : ${position.coords.latitude}`);
    // },err=>Alert.alert(err));
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numberOfDays: "",
      reminderDays: "",
      rate: "",
      order: "",
      subscriptionId: "5bf965a191f0fa5b5e3052af",
      token: ""
    };
  }
  render() {
    //const token = token;
    // (
    //   "token",
    //   "eb74494924bb51c959df53d3ea723af8:c4e18c19edd6f021dba62e64cd6c12ba104f465dd98bfc6d239707eb98ba20ea5f00d0d54a341e7bae9b05b43ee14d51cf02531e0de78ebfa2e9c33154c8fbe71958272a0759f72a287f58e3327bd637297fbd9b7cb12b5b505889691ee6aa3e"
    // );
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={name => this.setState({ name })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="category name"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="words"
          placeholderTextColor="#ffffff"
          onSubmitEditing={() => this.numberOfDays.focus()}
          ref={input => (this.name = input)}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={numberOfDays => this.setState({ numberOfDays })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="validity days e.g. 30"
          returnKeyType="next"
          autoCorrect={true}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
          onSubmitEditing={() => this.reminderDays.focus()}
          ref={input => (this.numberOfDays = input)}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={reminderDays => this.setState({ reminderDays })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="reminder days e.g. 7"
          returnKeyType="next"
          autoCorrect={true}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
          onSubmitEditing={() => this.rate.focus()}
          ref={input => (this.reminderDays = input)}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={rate => this.setState({ rate })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="rate amount e.g. 500"
          returnKeyType="next"
          autoCorrect={true}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
          onSubmitEditing={() => this.order.focus()}
          ref={input => (this.rate = input)}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={order => this.setState({ order })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="order - display category e.g. 1"
          returnKeyType="next"
          autoCorrect={true}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
          ref={input => (this.order = input)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.saveCategory()}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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
  categoryText: {
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
