import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LoginCount = props => {
  return (
    <Button
      title="Login Count"
      onPress={() => {
        props.onPress(
          4,
          "eb74494924bb51c959df53d3ea723af8:c4e18c19edd6f021dba62e64cd6c12ba104f465dd98bfc6d239707eb98ba20ea5f00d0d54a341e7bae9b05b43ee14d51cf02531e0de78ebfa2e9c33154c8fbe71958272a0759f72a287f58e3327bd637297fbd9b7cb12b5b505889691ee6aa3e"
        );
        alert(props.token);
      }}
    />
  );
};

export default LoginCount;
 