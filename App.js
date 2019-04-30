import React, { Component } from "react";
import {
  Platform,
  StyleSheet
} from "react-native";
import SmsRetriever from "react-native-sms-retriever";
import RootStack from "./components/Navigation";
import smsHelper from "./SmsHelper";
import Location from "./components/Location";

export default class App extends Component<Props> {
  async componentDidMount() {
    if ( Platform.OS === "android" ) {
      try {
        const registered = await SmsRetriever.startSmsRetriever();
        if ( registered ) {
          SmsRetriever.addSmsListener( this._onReceiveSms );
        }
        // alert(`SMS Listener Registered: ${registered}`);
      } catch ( error ) {
        // alert(`SMS Listener Error: ${JSON.stringify(error)}`);
      }
    }
  }

  // SMS Handlers
  _onReceiveSms = ( event ) => {
    const coordinate = smsHelper.parse( event.message );
    alert( coordinate.latitude + " " + coordinate.longitude );
  };

  render() {
    return (
      <RootStack />
    );
  }
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
