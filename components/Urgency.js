import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Urgency extends Component<Props> {
  state: {
    urgency: "",
    nextPress: Boolean
  };

   _highPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.urgency == "high")
    {
      this.setState({urgency: ""});
    }
    else{
    this.setState({urgency: "high"});
    }
  }

  _medPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.urgency == "medium")
    {
      this.setState({urgency: ""});
    }
    else{
    this.setState({urgency: "medium"});
    }
  }

  _lowPress(){
    //Alert.alert('You tapped the button!');
    if(this.state.urgency == "low")
    {
      this.setState({urgency: ""});
    }
    else{
    this.setState({urgency: "low"});
    }
  }

  constructor(props){
       super(props);
        this.state = { urgency: "" };
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
                  color = {this.state.urgency == "high" ? 'purple' : 'blue'}
              />
          </View>
          
          <View style={styles.submit}>
              <Button style={styles.submit}
                  onPress={this._medPress} 
                  title="Medium (Need help within 4 hours)"
                  color = {this.state.urgency == "medium" ? 'purple' : 'blue'}
              />
          </View>
          
          <View style={styles.submit}>
              <Button style={styles.submit}
                  onPress={this._lowPress} 
                  title="Low (Need help within 24 hours)"
                  color = {this.state.urgency == "low" ? 'purple' : 'blue'}
              />
          </View>
          

          <View style={styles.next}>
              <Button style={styles.next}
                  onPress={() => navigation.navigate( "Location" , {urgency: this.state.urgency})}
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