import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import Map from "./components/Map";

export default class App extends Component<Props> {
  render() {
    return (
      <Map />
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
} );
