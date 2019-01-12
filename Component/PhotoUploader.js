import React, { Component } from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,Alert } from "react-native";
// import { ImagePicker } from 'expo';
import axios from 'axios';
import * as firebase from "firebase";

import defaultAppConfig from '../Constants/ApiKeys';

export default class PhotoUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg",
      pickedImage:null
    };
    
    
    //this.postFunStuff = this.postFunStuff.bind(this);
    this.pickImage = this.pickImage.bind(this);
    //alert(firebase.apps.length);
    //this.postPic = this.postPic.bind(this);
  }

  pickImage = async () => {
    // const result = await ImagePicker.launchCameraAsync({
    //   allowsEditing: true,
    //   base64: true,
    // });

    // const result = await ImagePicker.launchImageLibraryAsync({
    //   allowsEditing: true,
    //   base64: true,
    // });
    
if (!result.cancelled) {
      this.setState({
        image: result.uri,
        pickedImage:result
      });
      this.uploadImage(result.uri, "WahidAli")
      .then(()=>{
        Alert.alert("Success");
      })
      .catch((error)=>{
        Alert.alert(error);
      }
      );
    }
  };

  uploadImage= async (uri,imageName)=>{
    
    const UrlFile= "https://api.cloudinary.com/v1_1/pickup/image/upload";
    try
    {
        const response=await fetch(uri);
        const blob = await response.blob();
        // Initialize firebase...
        // Initialize the default app
        //const defaultApp = admin.initializeApp(defaultAppConfig);

        //Alert.alert(defaultApp.name);  // "[DEFAULT]"

        // Retrieve services via the defaultApp variable...
        //const defaultAuth = defaultApp.auth();
        //const ref= defaultApp.storage().ref().child('images/'+imageName)
        //return ref.put(blob);

        const UrlFile= "https://api.cloudinary.com/v1_1/pickup/image/upload";
        // try
        // {
        // var response=await request
        //           .post(UrlFile)
        //           .send(this.state.pickedImage);
        
        //     alert("Upload done!!!!!");
        //     return response;
        // }
        // catch(error){
        //   alert(error);
        // }
      return null;      
    }
    catch(error){
      alert("Error:"+error);
    }
  }


    // RNCloudinary.config(CLOUD_NAME, API_KEY, API_SECRET, PRESET_NAME);

    // try{
    //   var response=await RNCloudinary.uploadImage(this.state.image);
    //   alert("Upload done! ::: " + response);
    //   return response;
    // }
    // catch(error){
    //   alert(error);
    // }

    
    
    //    const Url= 'https://api.cloudinary.com/v1_1/' + YOUR_CLOUDINARY_NAME + '/file/upload'
    


    // const data = new FormData();
    // data.append('file', file, file.fileName);
    // const config = {
    //         headers: {
    //                     'accept': 'application/json',
    //                     'Accept-Language': 'en-US,en;q=0.8',
    //                     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //                   }
    //               };
    // const response=await axios.post(Url, data, config);
    // alert("Successfully Uploaded!");
    // return response;
    // }
    // catch(error){
    //   alert(error);
    // }


    // RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/' + YOUR_CLOUDINARY_NAME + '/file/upload?upload_preset=' + YOUR_CLOUDINARY_PRESET, {
    //       'Content-Type': 'multipart/form-data'
    //   }, [
    //       { 
    //           name: 'file', 
    //           filename: file.fileName, 
    //           data: RNFetchBlob.wrap(file.origURL) 
    //       }
    //      ])
    

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <Image
            style={styles.uploadImage}
            resizeMode='cover'
            source={{
              uri: this.state.image
            }}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.uploadImage}>
                <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    padding:2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff",
    marginBottom:10
  },
  uploadImage: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },
  button: {
    width: 200,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 10,
    color:"#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});