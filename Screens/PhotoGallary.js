import React, { Component } from "react";
import axios from "axios";
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal } from "react-native";
import { ImageElements } from "../Component/ImageElements";
import { Header } from "../Component/Header";

export default class PhotoGallary extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      textSearch:'kitten',
      items: []
      };
    }
    componentDidMount(){
      const url=`https://api.flickr.com/services/feeds/photos_public.gne?tags=${this.state.textSearch}&format=json&nojsoncallback=true`;
      axios.get(url) 
      .then((response) => {
        const items= response.data.items;
        this.setState({ items:items });
      })
      .catch((err) => {
      console.log(err)
      })  
    }
    handleNewImageElement = (event) => {
    let imageelements=this.state.imageelements;
    const url=`https://api.flickr.com/services/feeds/photos_public.gne?tags=${this.state.textSearch}&format=json&nojsoncallback=true`;
    axios.get(url) 
    .then((response) => {
      const items= response.data.items;
      this.setState({ items:items });
    })
    .catch((err) => {
    console.log(err)
    })
    };

    onUpdate = (val) => {
    this.setState({
      textSearch: val
    })
    };

  render() {
    return (
      <View style={styles.container}>
       
        <Header  onNewImageElement={this.handleNewImageElement} onUpdate={this.onUpdate} />
        <View style={styles.bottom}>
        <ImageElements imageelements={this.state.items} />
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
  },
  bottom:{
    height:'80%',
    width: '100%',
    backgroundColor: "#292929",
    padding:5
  }
});