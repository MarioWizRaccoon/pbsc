import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';

import {White} from '../constant/color';

export default class Main extends Component<Props> {
  render() {
    return (
        <View style={styles.main}>
          <View style={styles.innerMain}>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 0.6,
    justifyContent: 'center',
    flexDirection: 'row',
    maxHeight: 380,
  },
  innerMain: {
    flex:1,
    backgroundColor: White,
    maxWidth: 500,
  },
});
