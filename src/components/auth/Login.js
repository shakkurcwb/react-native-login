import React, { Component } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

import AuthStyles from '../../styles/Auth.js';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Join our community!',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'demo@demo.ru',
      password: ''
    };
    this._signIn = this._signIn.bind(this);
  }

  _signIn() {
    const { username, password } = this.state;

    if (username != 'demo@demo.ru') {
      Alert.alert('User not registered.');
      return;
    }

    const user = {
      username: username,
      email: username,
      name: 'Mr. Demo',
    };

    return this.props.navigation.replace("Home", { user: user });
  }

  render() {
    return (
      <View style={ AuthStyles.container }>

        <View style={ AuthStyles.header }>
          <Text style={ AuthStyles.title }>TikTrak</Text>
          <Text style={ AuthStyles.subTitle }>Easily Tracking</Text>
        </View>

        <View style={ AuthStyles.box }>
          <Text style={ AuthStyles.label }>Username:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="Type your e-mail address"
            onChangeText={ (username) => this.setState({ username }) }
          >
            { this.state.username }
          </TextInput>
          <Text style={ AuthStyles.label }>Password:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="******"
            onChangeText={ (password) => this.setState({ password }) }
          >
            { this.state.password }
          </TextInput>
          <Button style={ AuthStyles.button } onPress={ this._signIn }>Sign In</Button>
        </View>

        <View style={ AuthStyles.footer }>
          <Text
            style={ AuthStyles.link }
            onPress={ () => this.props.navigation.navigate('Register') }
          >Sign up now!</Text>
        </View>

      </View>
    );
  }

}
export default LoginScreen;
