import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class Bbutton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={this.props.buttStyle}>
        <Text style={this.props.textStyle}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
