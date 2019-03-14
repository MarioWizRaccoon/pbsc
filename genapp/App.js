import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Light_Grey, Dark_Grey, Orange, White} from './constant/color';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
