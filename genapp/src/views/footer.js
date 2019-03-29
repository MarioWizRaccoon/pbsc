import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {Light_Grey, Dark_Grey, Orange, White} from '../constant/color';

import GenderButton from '../components/genderButton';

export default class Footer extends Component<Props> {
  render() {
    let noButtonActivation = {
      color: White,
      loading: false
    };

    let yesButtonActivation = {
      backColor: Orange,
      textColor: White,
      loading: false
    };

    if (this.props.isLoading) {
      noButtonActivation = {
        color: Light_Grey,
        loading: true
      }
    }

    if (this.props.isLoading || this.props.counter > 4) {
      yesButtonActivation = {
        backColor: Dark_Grey,
        textColor: Light_Grey,
        loading: true
      }
    }

    return (
        <View style={styles.footer}>
          <View style={styles.innerFooter}>
            <GenderButton onPress= {noButtonActivation.loading ? null: this.props.callApi}
                          text="No"
                          buttonStyle={StyleSheet
                            .flatten([styles.button,{backgroundColor: Dark_Grey}])}
                          textStyle={StyleSheet
                            .flatten([styles.textButton, {color: noButtonActivation.color}])}
            />
            <GenderButton onPress={yesButtonActivation.loading ? null: this.props.addPerson}
                          text="Yes"
                          buttonStyle={StyleSheet
                            .flatten([styles.button,{backgroundColor: yesButtonActivation.backColor}])}
                          textStyle={StyleSheet
                            .flatten([styles.textButton, {color: yesButtonActivation.textColor}])}
            />
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
  button: {
    flex: 0.5,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
