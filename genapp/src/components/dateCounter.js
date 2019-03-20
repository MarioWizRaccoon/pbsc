import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

import {White, Black, Orange, Dark_Grey} from '../constant/color';

export default class DateCounter extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.counter > 4
        ?
        <Text style={StyleSheet.flatten([styles.counter, {backgroundColor: Orange}])}>{this.props.counter}</Text>
:        <Text style={StyleSheet.flatten([styles.counter, {backgroundColor: White}])}>{this.props.counter}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 22,
    width: 22,
    borderRadius: 4,
  },
  counter: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    color: Black,
  },
});