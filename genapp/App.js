import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';


import {Light_Grey, Dark_Grey, Orange, White, Black} from './constant/color';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <Text style={styles.apptitle}>Gender Neutral Dating App</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.innerMain}>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.innerFooter}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  header: {
    flex: 0.2,
    backgroundColor: Dark_Grey,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerHeader: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 60,
    maxWidth: 500,
    backgroundColor: 'yellow',
  },
  apptitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'left',
    color: Black,
    paddingLeft: 16,
  },
  main: {
    flex: 0.6,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerMain: {
    flex:1,
    backgroundColor: White,
    maxWidth: 500,
    maxHeight: 500,
  },
  footer: {
    flex: 0.2,
    backgroundColor: Dark_Grey,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  innerFooter: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 60,
    maxWidth: 500,
    backgroundColor: 'yellow',
  },
});
