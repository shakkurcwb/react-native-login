import React, { Component } from 'react';
import { View } from 'react-native';

class WatchPosition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => this.setState({ position, error: null }),
      (error) => this.setState({ error }),
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        position: this.state.position,
        error: this.state.error
      });
    });
    return (
      <View>
        { childrenWithExtraProp }
      </View>      
    );
  }
}

export default WatchPosition;