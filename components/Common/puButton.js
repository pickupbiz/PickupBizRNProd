
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


const title= Platform.select({
ios: 'I am IOS... 1',
android: 'I am Android..1' 
});


export default class puButton extends Component {
    
  render() {
    return (
      <View >
        <TouchableOpacity
                style={styles.button}
                onPress={this.props.handleOnPress}
              >
                <Text style={styles.buttonText}> {this.props.titlePU}</Text>
        </TouchableOpacity>

        
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
