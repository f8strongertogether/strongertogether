import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';

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

  render() {

    return (


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
        </View>


    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
//    justifyContent: "center",
//    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  submit: {
    flex: 1,
    margin: 60,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  instructions: {
    fontSize: 50,
    marginTop: 175,
    marginBottom: 30,
    textAlign: "center",
    color: '#353535',
    margin: 10

  },
  location: {
    fontSize: 30,
    textAlign: "center",
    color: "#353535",
    marginBottom: 5
  }
} );
