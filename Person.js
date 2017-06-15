import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Person(props) {
  const {
    name,
    age,
    address
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Person Component</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{age}</Text>
      <Text style={styles.text}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
