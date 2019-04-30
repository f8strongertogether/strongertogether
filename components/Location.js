import React, { Component } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onPress() {
    const { navigation } = this.props;
    Alert.alert( "Your request has been submitted." );
    navigation.navigate( "Post" );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Where are you located?</Text>
        <TextInput
          style={styles.location}
          placeholder="Enter Location"
          onChangeText={text => this.setState( { text } )}
        />
        <Text>The passed urgency is {this.props.navigation.state.params.urgency}</Text>
        <View style={styles.submit}>
          <Button
            style={styles.submit}
            onPress={() => this.onPress()}
            title="Submit"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  submit: {
    flex: 1,
    margin: 60,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  instructions: {
    fontSize: 50,
    marginTop: 175,
    marginBottom: 30,
    textAlign: "center",
    color: "#353535",
    margin: 10

  },
  location: {
    fontSize: 30,
    textAlign: "center",
    color: "#353535",
    marginBottom: 5
  }
} );
