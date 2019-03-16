import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {White} from './constant/color';

import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
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
});
