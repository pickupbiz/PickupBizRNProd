import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Logo from "../Component/Logo";
import SignupForm from "../Component/SignupForm";

export default class Signup extends React.Component {
    state = {  }
    static navigationOption={
        header:null
    }
    render() { 
        return ( 
        <View style={styles.container}>
            <SignupForm />
            <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('home')}>
                <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
            </View>
      </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 2
    }
  });