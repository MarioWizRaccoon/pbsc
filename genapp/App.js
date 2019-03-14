import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Light_Grey, Dark_Grey, Orange, White, Black} from './constant/color';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.apptitle}>Gender Neutral Dating App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
    maxHeight: 500,
    maxWidth: 500,
    fontFamily: 'Roboto, sans-serif',

  },
  apptitle: {
    fontSize: 18,
    textAlign: 'left',
    height: 60,
    alignItems: 'center',
    backgroundColor: Dark_Grey,
    fontcolor: Black,
    paddingLeft: 16,
    top: 0
  },
});
