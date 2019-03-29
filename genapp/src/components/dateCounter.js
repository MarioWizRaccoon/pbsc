import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

import {White, Black, Orange, Dark_Grey} from '../constant/color';

export default class DateCounter extends Component<Props> {
  render() {
    let counterBackColor = White;
    if (this.props.counter > 4) {
      counterBackColor = Orange;
    }

    return (
      <View style={styles.container}>
         <Text style={StyleSheet.flatten([styles.counter, {backgroundColor: counterBackColor}])}>{this.props.counter}</Text>
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