import React, { Component } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

import AppStyles from '../../styles/App.js';
import WatchPosition from '../WatchPosition.js';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const user = navigation.getParam('user');
    return {
      title: 'Welcome back, ' + user.name + '!',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      tracking: false,
    };
    this.updateTracking = this.updateTracking.bind(this);
  }

  updateTracking() {
    this.setState((previousState) => {
      return { tracking: !previousState.tracking }
    });
  }  

  render() {
    return (
      <View style={ AppStyles.container }>
        <View>
          <Button style={ AppStyles.button } onPress={ this.updateTracking }>
            { !this.state.tracking ? 'Start' : 'Stop' }
          </Button>
        </View>
        { !this.state.tracking && (
          <View>
            <Text style={ AppStyles.label }>
              You must start the tracker clicking in the above button.
            </Text>
          </View>
        ) }
        { this.state.tracking && (
          <WatchPosition>
            <Dashboard { ...this.props } />
          </WatchPosition>
        ) }
      </View>
    );
  }

}

export default HomeScreen;

const Dashboard = (props) => {

  if (props.error) {
    return <View><Text>{ props.error.message }</Text></View>;
  }

  return props.position && (
    <View>
      <Text>Latitude: { props.position.coords.latitude }</Text>
      <Text>Longitude: { props.position.coords.longitude }</Text>
      <Text>Speed: { props.position.coords.speed }m/s</Text>
      <Text>Altitude: { props.position.coords.altitude }m</Text>
      <Text>Accuracy: { props.position.coords.accuracy }%</Text>
    </View>
  );
};