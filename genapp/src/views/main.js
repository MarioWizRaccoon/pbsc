import React, {Component} from 'react';
import {StyleSheet,View, Text, Image, ActivityIndicator} from 'react-native';

import {White, Black} from '../constant/color';

// TODO: modify activityIndicator with the "loading..." statement
// TODO: record uuid and set state "desired" to false.

export default class Main extends Component<Props> {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    let lastName = JSON.stringify(this.state.dataSource.results[0].name.last);
    let firstName = JSON.stringify(this.state.dataSource.results[0].name.first);
    let image = JSON.stringify(this.state.dataSource.results[0].picture.large);
    let personAge = JSON.stringify(this.state.dataSource.results[0].dob.age);
    let personUuid = JSON.stringify(this.state.dataSource.results[0].login.uuid);


    return (
        <View style={styles.main}>
          <View style={styles.innerMain}>
            <Image
              style={styles.picture}
              source={{uri: JSON.parse(image)}}/>
            <Text style={styles.personName}>{JSON.parse(firstName)} {JSON.parse(lastName)}</Text>
            <Text style={styles.personAge}>({JSON.parse(personAge)})</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 128,
    height: 128,
    borderRadius: 75,
  },
  personName: {
    color: Black,
    fontSize: 32,
    textTransform: 'capitalize'
  },
  personAge: {
    color: Black,
    fontSize: 14,
  }
});
