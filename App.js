import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/components/auth/Login.js';
import RegisterScreen from './src/components/auth/Register.js';
import HomeScreen from './src/components/home/Home.js';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default function App(props) {
  return <RootStack />;
}