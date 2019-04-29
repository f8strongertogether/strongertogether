import React, { Component } from 'react';
<<<<<<< Updated upstream
import { Alert, AppRegistry, Text, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
    
      <View style={styles.container}>
      
      <View>
        <Text style={styles.mainText}>What do you need?</Text>
      </View>
      
        
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Food"
          />
          <Button
            onPress={this._onPressButton}
            title="Water"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Medical"
          />
          <Button
            onPress={this._onPressButton}
            title="Evacuation"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Clothing"
          />
          <Button
            onPress={this._onPressButton}
            title="Other"
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Submit"
          />
        </View>
        
=======
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
>>>>>>> Stashed changes
      </View>
    );
  }
}

<<<<<<< Updated upstream
const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center'
  },
  
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
=======





>>>>>>> Stashed changes
