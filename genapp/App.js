import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


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
            <TouchableOpacity style={styles.noButton}>
              <Text style={styles.noTextButton}>
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.yesTextButton}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: White,
    justifyContent: 'center',
  },
  header: {
    flex: 0.2,
    backgroundColor: White,
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
    backgroundColor: Dark_Grey,
  },
  apptitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: White,
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
    backgroundColor: White,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  innerFooter: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    maxWidth: 500,
    backgroundColor: Light_Grey,
  },
  noButton: {
    flex: 0.5,
    backgroundColor: Dark_Grey,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noTextButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: White,
  },
  yesButton: {
    flex: 0.5,
    backgroundColor: Orange,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesTextButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: White,
  },
});
