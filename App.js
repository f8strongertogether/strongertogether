<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Survey from './components/Survey'
=======
import  from "react-native";
import RootStack from "./components/Navigation";
import SmsRetriever from "react-native-sms-retriever";
import smsHelper from './SmsHelper'

export default class App extends Component<Props> {

  render() {
    return (
      <RootStack />
    );
  }

  async componentDidMount() {
      if (Platform.OS === 'android') {
          try {
              const registered = await SmsRetriever.startSmsRetriever();
              if (registered) {
                  SmsRetriever.addSmsListener(this._onReceiveSms);
              }
              // alert(`SMS Listener Registered: ${registered}`);
          } catch (error) {
              // alert(`SMS Listener Error: ${JSON.stringify(error)}`);
          }
      }
  }

    // SMS Handlers
    _onReceiveSms = (event) => {
        let coordinate = smsHelper.parse(event.message);
        alert(coordinate.latitude + " " + coordinate.longitude);
    };

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
