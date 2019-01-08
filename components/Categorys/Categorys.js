import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import * as categoryActions from "../../actions/categoryAction";
import { connect } from "react-redux";
import Category from "./Category";

class CategorysApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Category categorys={this.props.categorys} />

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("CategorysNew")}
            >
              <Text style={styles.buttonText}>New Category</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.loadCategory()}
            >
              <Text style={styles.buttonText}>Load Categories</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    categorys: state.categorys,
    isLoading: state.isLoading,
    userInfo: state.userInfo,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategory: () => dispatch(categoryActions.loadCategory())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorysApp);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    backgroundColor: "#1c313a",
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 5,
    color: "#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
