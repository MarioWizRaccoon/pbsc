import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {White} from './src/constant/color';

import Header from './src/views/header';
import Main from './src/views/main';
import Footer from './src/views/footer';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isLoading: true ,
      dataSource: []
    };
  }

  componentDidMount(): void {
    this.callApi();
  }

  addPersonOfInterest = () => {
    this.setState({
      count: this.state.count + 1,
    });

    this.callApi();
  };

  callApi = () => {
    this.setState({
      isLoading: true,
    });

    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  };


  render() {
    const { isLoading, count, dataSource } = this.state;
    return (
      <View style={styles.container}>
        <Header counter={count} />
        <Main isLoading={isLoading}
              dataSource={dataSource}/>
        <Footer isLoading={isLoading}
                addPerson={this.addPersonOfInterest}
                callApi={this.callApi}
                counter={count}
        />
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
