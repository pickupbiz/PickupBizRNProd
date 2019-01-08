import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>About Page</Text>
                <Button title="Go to back to Home Page" onPress={()=>alert('Hi')}></Button>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#455a64",
      alignItems: "center",
      justifyContent: "center",
      padding: 2
    }
  });
export default About;