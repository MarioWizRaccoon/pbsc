import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

// TODO: onClick, launch api call
// TODO: If "yes" add one to counter state for the uuid.

export default class Bbutton extends Component<Props> {

  onPressButton = () => {
    this.setState({
      count: this.state.count
    })
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPressButton}
        style={this.props.buttStyle}>
        <Text style={this.props.textStyle}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
