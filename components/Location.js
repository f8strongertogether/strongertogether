import React, { Component } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

<<<<<<< HEAD
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
    navigation.navigate( "See Posts" );
  }
=======
export default class App extends Component<Props> {
  constructor({ navigation }) {
    super(props);
    this.state = {text: ''};
  }

    onPress() {
      const { navigation } = this.props;
      Alert.alert('Your request has been submitted.')
      navigation.navigate( "See Posts" )
    }
>>>>>>> a5169803b88fc46ccf8d735f7a118bcdd74d14b8

  render() {

    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <Text style={styles.instructions}>Where are you located?</Text>
        <TextInput
          style={styles.location}
          placeholder="Enter Location"
          onChangeText={text => this.setState( { text } )}
        />
        <View style={styles.submit}>
          <Button
            style={styles.submit}
            onPress={() => this.onPress()}
            title="Submit"
          />
=======


        <View style={styles.container}>
            <Text style={styles.instructions}>Where are you located?</Text>

            <TextInput
              style={styles.location}
              placeholder="Enter Location"
              onChangeText={(text) => this.setState({text})}
            />

            <View style={styles.submit}>
                <Button style={styles.submit}
                    onPress={this.onPress}
                    title="Submit"
                />
            </View>
>>>>>>> a5169803b88fc46ccf8d735f7a118bcdd74d14b8
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
