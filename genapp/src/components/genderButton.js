import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class GenderButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={this.props.buttonStyle}>
        <Text style={this.props.textStyle}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
