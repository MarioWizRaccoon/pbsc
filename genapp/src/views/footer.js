import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {Light_Grey, Dark_Grey, Orange, White} from '../constant/color';

import Bbutton from '../components/bbutton';

export default class Footer extends Component<Props> {
  render() {
    return (
        <View style={styles.footer}>
          <View style={styles.innerFooter}>
            <Bbutton text="No"  buttStyle={styles.noButton}   textStyle={styles.noTextButton} />
            <Bbutton text="Yes" buttStyle={styles.yesButton}  textStyle={styles.yesTextButton} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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