import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {White} from './src/constant/color';

import Header from './src/views/header';
import Main from './src/views/main';
import Footer from './src/views/footer';

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
