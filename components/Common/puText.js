
import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';


const title= Platform.select({
ios: 'I am IOS... 1',
android: 'I am Android..1' 
});


export default class puText extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: ""
        };
      }  
  render() {
    return (
        <View >
        <TextInput
          style={styles.inputBox}
          onChangeText={username => this.setState({ username: username })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={this.props.titlePU}
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={"phone-pad"}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  title: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
