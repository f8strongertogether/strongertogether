import React, { Component } from "react";
import {
    StyleSheet,
    Platform
} from "react-native";
import RootStack from "./components/Navigation";
import SmsRetriever from "react-native-sms-retriever";


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

// Handlers
  _onReceiveSms = (event) => {
      alert(event.message
          .replace('<#>', '')
          .replace('Dt6yj3YDe6i', '')
      );
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
