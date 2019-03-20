import React, {Component} from 'react';
import {StyleSheet,View, Text, Image, ActivityIndicator} from 'react-native';

import {White, Black} from '../constant/color';

export default class Main extends Component<Props> {
  render() {

    if(this.props.isLoading){
      return(
        <View style={styles.innerMain}>
          <Text>Loading...</Text>
        </View>
      )
    }

    let lastName = JSON.stringify(this.props.dataSource.results[0].name.last);
    let firstName = JSON.stringify(this.props.dataSource.results[0].name.first);
    let image = JSON.stringify(this.props.dataSource.results[0].picture.large);
    let personAge = JSON.stringify(this.props.dataSource.results[0].dob.age);
    let personUuid = JSON.stringify(this.props.dataSource.results[0].login.uuid);

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
