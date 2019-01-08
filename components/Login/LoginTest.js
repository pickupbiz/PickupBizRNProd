import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
// import { connect } from "react-redux";
// import Logo from "../Logo";
// import { login } from "../../actions/authService";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
//   handleLogin = () => {
//     this.props.login(this.state.username.trim(), this.state.password.trim());
//     this.props.navigation.navigate("Categorys");
//   };
  render() {
    return (
      <View>
        
          <View style={styles.container}>
            <TextInput
              style={styles.inputBox}
              onChangeText={username => this.setState({ username: username })}
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
              onChangeText={password => this.setState({ password: password })}
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
              onPress={() => this.handleLogin()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("signup")}
              >
                <Text style={styles.buttonText}>Signup</Text>
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
        
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isLoading: state.isLoading,
//     error: state.error
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     login: (mobile, password) => dispatch(login(mobile, password))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginForm);

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
