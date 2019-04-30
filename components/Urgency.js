import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    onPress() {
      Alert.alert('You tapped the button!')
    }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>What is your urgency??</Text>

           <View style={styles.submit}>
                <Button style={styles.submit}
                    onPress={this.onPress}
                    title="High(Life or death)"
                />
            </View>
            
                      <View style={styles.submit}>
                <Button style={styles.submit}
                    onPress={this.onPress}
                    title="Medium(Need help within 4 hours)"
                />
            </View>
                      <View style={styles.submit}>
                <Button style={styles.submit}
                    onPress={this.onPress}
                    title="Low(Need help within 24 hours)"
                />
            </View>
         
            

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
 justifyContent: "space-between",
// alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  submit: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  instructions: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 10,
    textAlign: "center",
    color: '#353535',
    margin: 10

  },
  location: {
    fontSize: 30,
    textAlign: "center",
    color: "#353535",
    marginBottom: 1
  }
} );