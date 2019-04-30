import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Urgency extends Component<Props> {
  state: {
    highUrg: Boolean,
    medUrg: Boolean,
    lowUrg: Boolean,
    nextPress: Boolean
  };

   _highPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.highUrg)
    {
      this.setState({highUrg: false});
    }
    else{
    this.setState({highUrg: true});
    }
  }

  _medPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.medUrg)
    {
      this.setState({medUrg: false});
    }
    else{
    this.setState({medUrg: true});
    }
  }

  _lowPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.lowUrg)
    {
      this.setState({lowUrg: false});
    }
    else{
    this.setState({lowUrg: true});
    }
  }

  constructor(props){
       super(props);
        this.state = { highUrg: false };
        this.state = { medUrg: false };
        this.state = { lowUrg: false };
        this.state = { nextPress: false };
      this._highPress = this._highPress.bind(this);
      this._medPress = this._medPress.bind(this);
      this._lowPress = this._lowPress.bind(this);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        
        <View>
          <Text style={styles.instructions}>What is your urgency?</Text>
          </View>

          <View style={{marginBottom: 30}}></View>

          <View style={styles.submit}>
              <Button style={styles.submit}
                  onPress={this._highPress} 
                  title="High (Life or death)"
                  color = {this.state.highUrg ? 'purple' : 'blue'}
              />
          </View>
          
          <View style={styles.submit}>
              <Button style={styles.submit}
                  onPress={this._medPress} 
                  title="Medium (Need help within 4 hours)"
                  color = {this.state.medUrg ? 'purple' : 'blue'}
              />
          </View>
          
          <View style={styles.submit}>
              <Button style={styles.submit}
                  onPress={this._lowPress} 
                  title="Low (Need help within 24 hours)"
                  color = {this.state.lowUrg ? 'purple' : 'blue'}
              />
          </View>
          

          <View style={styles.next}>
              <Button style={styles.next}
                  onPress={() => navigation.navigate( "Location" )}
                  title="Next"
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'white'
  },
  submit: {
    padding: 20,
    width: 350,
    //flexDirection: 'column',
    justifyContent: 'center'
  },
  next: {
    padding: 20,
    //flexDirection: 'column',
    justifyContent: 'center'
  },
  instructions: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
} );