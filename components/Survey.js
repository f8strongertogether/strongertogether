import React, { Component } from 'react';
import { Alert, AppRegistry, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native';



export default class ButtonBasics extends Component {

  state: {
    foodstatusPress: Boolean,
    waterPress: Boolean,
    evacPress: Boolean,
    clothPress: Boolean,
    medPress: Boolean,
    otherPress: Boolean,
    submitPress: Boolean
  };

   _handleOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.foodstatusPress)
    {
      this.setState({foodstatusPress: false});
    }
    else{
    this.setState({foodstatusPress: true});
    }
  }

  _waterOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.waterPress)
    {
      this.setState({waterPress: false});
    }
    else{
    this.setState({waterPress: true});
    }
  }

  _evacOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.evacPress)
    {
      this.setState({evacPress: false});
    }
    else{
    this.setState({evacPress: true});
    }
  }

  _clothOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.clothPress)
    {
      this.setState({clothPress: false});
    }
    else{
    this.setState({clothPress: true});
    }
  }

  _medOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.medPress)
    {
      this.setState({medPress: false});
    }
    else{
    this.setState({medPress: true});
    }
  }

  _otherOnPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.otherPress)
    {
      this.setState({otherPress: false});
    }
    else{
    this.setState({otherPress: true});
    }
  }

  constructor(props){
       super(props);
        this.state = { foodstatusPress: false };
        this.state = { waterPress: false };
        this.state = { evacPress: false };
        this.state = { clothPress: false };
        this.state = { medPress: false };
        this.state = { otherPress: false };
        this.state = { submitPress: false };
      this._handleOnPress = this._handleOnPress.bind(this);
      this._waterOnPress = this._waterOnPress.bind(this);
      this._evacOnPress = this._evacOnPress.bind(this);
      this._clothOnPress = this._clothOnPress.bind(this);
      this._medOnPress = this._medOnPress.bind(this);
      this._otherOnPress = this._otherOnPress.bind(this);
  }

  render() {
    return (

      <View style={styles.container}>
      
      <View>
        <Text style={styles.mainText}>What do you need?</Text>
      </View>

      <View style={{marginBottom: 30}}></View>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._handleOnPress}            
            title="Food"
            color = {this.state.foodstatusPress ? 'red' : 'blue'}
            
          /></View>

        { <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._waterOnPress}
            title="Water"
            color = {this.state.waterPress ? 'red' : 'blue'}
          /></View>          }
          
        </View>

        <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._medOnPress}
            title="Medical"
            color = {this.state.medPress ? 'red' : 'blue'}
          /></View>
        <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._evacOnPress}
            title="Evacuation"
            color = {this.state.evacPress ? 'red' : 'blue'}
          /></View>         
          
        </View>
        
        <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flex: 1, height: 50, margin: 5}}>
        <Button
            onPress={this._clothOnPress}
            title="Clothing"
            color = {this.state.clothPress ? 'red' : 'blue'}
          /></View>
        <View style={{flex: 1, height: 50, margin: 5}} >
        <Button
            onPress={this._otherOnPress}
            title="Other"
            color = {this.state.otherPress ? 'red' : 'blue'}
          /></View>         
          
        </View> 
        </View> 


        {/* <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleOnPress(submitPress)}
            title="Submit"
          />
        </View> */}

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   backgroundColor: 'grey',
   justifyContent: 'center',
   alignItems: 'center'
  },
  
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  buttonContainer: {
    padding: 20,
    width: 150,
    justifyContent: 'center'
  },

});

