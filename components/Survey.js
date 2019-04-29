import React, { Component } from 'react';
import { Alert, AppRegistry, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native';

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

      <View style={{marginBottom: 30}}></View>
      
      <View style={{justifyContent: 'center',
      alignItems: 'center'}}>

      <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._onPressButton}
            title="Food"
            color = 'red'
          /></View>
        <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._onPressButton}
            title="Water"
          /></View>         
          
        </View>

        <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._onPressButton}
            title="Medical"
            color = 'red'
          /></View>
        <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._onPressButton}
            title="Evacuation"
          /></View>         
          
        </View>
        
        <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._onPressButton}
            title="Clothing"
            color = 'red'
          /></View>
        <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._onPressButton}
            title="Other"
          /></View>         
          
        </View>
        </View> 

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Submit"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   backgroundColor: 'grey',
   justifyContent: 'center',
   backgroundColor: 'red',
   alignItems: 'center',
  },
  
  mainText: {
    // For the top text ( Question)
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  buttonContainer: {
    margin: 1
  },

});

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);