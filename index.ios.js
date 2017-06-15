import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Person from "./Person";

export default class EnzymeAndJest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Person name={"Josh Adams"} age={30} address={"Birmighan, AL"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("EnzymeAndJest", () => EnzymeAndJest);
