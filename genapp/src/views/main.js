import React, {Component} from 'react';
import {StyleSheet,View, Text, Image } from 'react-native';

import {White, Black} from '../constant/color';

export default class Main extends Component<Props> {
  render() {

    if(this.props.isLoading){
      return(
        <View style={styles.main}>
          <View style={styles.innerMain}>
            <Text>Loading...</Text>
          </View>
        </View>
      )
    }

    let lastName = this.props.dataSource[0].name.last;
    let firstName = this.props.dataSource[0].name.first;
    let image = this.props.dataSource[0].picture.large;
    let personAge = this.props.dataSource[0].dob.age;

    return (
        <View style={styles.main}>
          <View style={styles.innerMain}>
            <Image
              style={styles.picture}
              source={{uri: image}}/>
            <Text style={styles.personName}>{firstName} {lastName}</Text>
            <Text style={styles.personAge}>({personAge})</Text>
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
