/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  View
} from 'react-native';
import {Header} from './src/common';
import LoginForm from './src/LoginForm';

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyDpJqBBc4D_Ca1uP_cwxEfK5yiC3CgiH-0",
        authDomain: "fir-basicauth-57cf7.firebaseapp.com",
        databaseURL: "https://fir-basicauth-57cf7.firebaseio.com",
        projectId: "fir-basicauth-57cf7",
        storageBucket: "fir-basicauth-57cf7.appspot.com",
        messagingSenderId: "159575804334"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}
