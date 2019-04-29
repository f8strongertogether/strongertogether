/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SmsRetriever from "react-native-sms-retriever";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    async componentDidMount() {
        try {
            const registered = await SmsRetriever.startSmsRetriever();

            if (registered) {
                SmsRetriever.addSmsListener(this._onReceiveSms);
            }

            alert(`SMS Listener Registered: ${registered}`);
        } catch (error) {
            alert(`SMS Listener Error: ${JSON.stringify(error)}`);
        }
    }


    // Handlers
    _onReceiveSms = (event) => {
        alert(event.message
            .replace('<#>', '')
            .replace('Dt6yj3YDe6i', '')
        );
    };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Stronger Together</Text>
        <Text style={styles.instructions}>For disaster response</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
