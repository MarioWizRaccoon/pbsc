import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dark_Grey, Light_Grey} from "../constant/color";

// TODO disabled "yes" button when reach 5
// TODO disabled buttons when isLoading

export default class Bbutton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={this.props.buttStyle}>
        <Text style={this.props.textStyle}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
