import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> How Are You {this.props.name}? </Text>
      </View>
    );
  }
}
