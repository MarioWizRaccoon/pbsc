"use strict";

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/state/store';

import {White} from './src/constant/color';

import Header from './src/views/header';
import Main from './src/views/main';
import Footer from './src/views/footer';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header/>
          <Main/>
          <Footer/>
        </View>
      </Provider>
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
