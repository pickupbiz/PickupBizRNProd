import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";

const CategoryCombo = props => {
  const { data } = props.items;
  alert(JSON.stringify(data));
  return (
    <ScrollView style={styles.bottomItems}>
      <View style={styles.listItems}>
        {data.map(category => {
          <Text>{category.name}</Text>;
        })}
        }
      </View>
    </ScrollView>
  );
};
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  bottomItems: {
    padding: 5,
    backgroundColor: "#292929",
    alignItems: "center"
  },
  listItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
export default CategoryCombo;
