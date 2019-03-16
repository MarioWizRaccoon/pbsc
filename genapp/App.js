import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';


import {Light_Grey, Dark_Grey, Orange, White, Black} from './constant/color';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBlock}>
            <Text style={styles.apptitle}>Gender Neutral Dating App</Text>
          </View>
        </View>
        <View style={styles.main}>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}

// let {width, height} = Dimensions.get('window');
// if (width < 500) {
//   let maximumHeight = width;
// }


const styles = StyleSheet.create({
  container: {
    flex:1,
    // maxHeight: 500,
    // maxWidth: 500,
    // maxHeight: width,
    backgroundColor: 'green',
  },
  header: {
    flex: 0.2,
    backgroundColor: Dark_Grey,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerBlock: {
    flex:1,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // flexDirection: 'column',
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
    backgroundColor: White,
  },
  footer: {
    flex: 0.2,
    backgroundColor: Dark_Grey,
  },
});
