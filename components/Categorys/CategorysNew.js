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
import { connect } from "react-redux";
import Logo from "../Logo";
import { addCategory } from "../../actions/categoryNewAction";

class CategorysNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numberOfDays: "",
      reminderDays: "",
      rate: "",
      order: ""
    };
  }
  handleSubmit = () => {
    this.props.addCategory(this.state.name.trim(), this.state.password.trim());
    this.props.navigation.navigate("Categorys");
  };
  render() {
    return (
      <View>
        {this.props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container}>
            <Logo />
            <TextInput
              style={styles.inputBox}
              onChangeText={name => this.setState({ name: name })}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="enter category name"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              onSubmitEditing={() => this.numberOfDays.focus()}
            />
            <TextInput
              style={styles.inputBox}
              onChangeText={numberOfDays =>
                this.setState({ numberOfDays: numberOfDays })
              }
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="enter validity days"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType={"phone-pad"}
              ref={input => (this.numberOfDays = input)}
              onSubmitEditing={() => this.reminderDays.focus()}
            />
            <TextInput
              style={styles.inputBox}
              onChangeText={numberOfDays =>
                this.setState({ reminderDays: reminderDays })
              }
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="enter reminder days"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType={"phone-pad"}
              ref={input => (this.reminderDays = input)}
              onSubmitEditing={() => this.rate.focus()}
            />
            <TextInput
              style={styles.inputBox}
              onChangeText={numberOfDays => this.setState({ rate: rate })}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="enter rate or price"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType={"phone-pad"}
              ref={input => (this.rate = input)}
              onSubmitEditing={() => this.order.focus()}
            />
            <TextInput
              style={styles.inputBox}
              onChangeText={numberOfDays => this.setState({ order: order })}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="enter order for sorting"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType={"phone-pad"}
              ref={input => (this.order = input)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <View style={styles.signupTextCont}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Categorys")}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (mobile, password) => dispatch(addCategory(mobile, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorysNew);

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
  }
});
