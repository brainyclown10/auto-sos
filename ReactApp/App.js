/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import { Button} from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View,
 // Alert
} from 'react-native';
import Login from './app/components/Login';
import Logo from './app/components/Logo';

//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' +
//    'Cmd+D or shake for dev menu',
//  android: 'Double tap R on your keyboard to reload,\n' +
//    'Shake or press menu button for dev menu',
//});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo /> 
        <Login />
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
