import React, { Component } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

import AuthStyles from '../../styles/Auth.js';

class RegisterScreen extends Component {

  static navigationOptions = {
    title: 'Registration'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmation: '',
    };
  }

  _signUp() {

    

  }

  render() {
    return (
      <View style={ AuthStyles.container }>

        <View style={ AuthStyles.subHeader }>
          <Text style={ AuthStyles.subTitle }>Be part of our worldwide community.</Text>
        </View>

        <View style={ AuthStyles.box }>
          <Text style={ AuthStyles.label }>Email:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="Type your e-mail address"
            onChangeText={ (email) => this.setState({ email }) }
          >
            { this.state.email }
          </TextInput>

          <Text style={ AuthStyles.label }>Name:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="Type your name"
            onChangeText={ (name) => this.setState({ name }) }
          >
            { this.state.name }
          </TextInput>

          <Text style={ AuthStyles.label }>Password:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="******"
            onChangeText={ (password) => this.setState({ password }) }
          >
            { this.state.password }
          </TextInput>

          <Text style={ AuthStyles.label }>Confirm:</Text>
          <TextInput
            style={ AuthStyles.input }
            placeholder="******"
            onChangeText={ (confirmation) => this.setState({ confirmation }) }
          >
            { this.state.confirmation }
          </TextInput>

          <Button style={ AuthStyles.button } onPress={ this._signUp }>Request</Button>
        </View>

        <View style={ AuthStyles.footer }>
          <Text
            style={ AuthStyles.link }
            onPress={ () => this.props.navigation.navigate('AuthFAQ') }
          >Need help? Click here</Text>
        </View>

      </View>
    );
  }

}
export default RegisterScreen;